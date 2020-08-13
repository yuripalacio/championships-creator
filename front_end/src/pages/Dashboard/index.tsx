import React, { useState, useEffect } from 'react';
import { FiPower, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Group,
  GroupHeader,
  TeamGroup,
  Plays,
  Brackets,
} from './styles';

import { useAuth } from '../../hooks/auth';
import Team from '../../components/Team';
import Play from '../../components/Play';
import Bracket from '../../components/Bracket';
import api from '../../services/api';

interface GroupStage {
  id: string;
  name: string;
}

interface GroupResults {
  team_id: string;
  name: string;
  avatar: string;
  score: number;
  round: number;
}

interface CurrentTeamPlay {
  stage_name: string;
  team_1_name: string;
  team_1_avatar: string;
  round_team_1: number;
  team_2_name: string;
  team_2_avatar: string;
  round_team_2: number;
}

interface RoundStage {
  id: string;
  stage_name: string;
  team_1_name: string;
  team_1_avatar: string;
  round_team_1: number;
  team_2_name: string;
  team_2_avatar: string;
  round_team_2: number;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [currentGroup, setCurrentGroup] = useState(0);
  const [groupStage, setGroupStage] = useState<GroupStage[]>([]);
  const [groupResults, setGroupResults] = useState<GroupResults[]>([]);
  const [teamPlays, setTeamPlays] = useState<CurrentTeamPlay[]>([]);

  const [round1Plays, setRound1Plays] = useState<RoundStage[]>([]);
  const [round2Plays, setRound2Plays] = useState<RoundStage[]>([]);
  const [round3Plays, setRound3Plays] = useState<RoundStage[]>([]);
  const [round4Plays, setRound4Plays] = useState<RoundStage[]>([]);
  const [round5Plays, setRound5Plays] = useState<RoundStage[]>([]);

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup < 16) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  useEffect(() => {
    api.get('stage-group-teams').then(response => {
      setGroupStage(response.data);
    });
  }, []);

  useEffect(() => {
    if (groupStage.length > 0) {
      api
        .get('stage-teams-group', {
          params: {
            stage_id: groupStage[currentGroup].id,
          },
        })
        .then(response => {
          setGroupResults(response.data);
        });
    }
  }, [currentGroup, groupStage]);

  useEffect(() => {
    if (groupStage.length > 0) {
      api
        .get('plays', {
          params: {
            stage_name: groupStage[currentGroup].name,
          },
        })
        .then(response => {
          setTeamPlays(response.data);
        });
    }
  }, [currentGroup, groupStage]);

  useEffect(() => {
    api
      .get('plays', {
        params: {
          stage_name: 'Round 1',
        },
      })
      .then(response => {
        setRound1Plays(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get('plays', {
        params: {
          stage_name: 'Round 2',
        },
      })
      .then(response => {
        setRound2Plays(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get('plays', {
        params: {
          stage_name: 'Round 3',
        },
      })
      .then(response => {
        setRound3Plays(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get('plays', {
        params: {
          stage_name: 'Round 4',
        },
      })
      .then(response => {
        setRound4Plays(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get('plays', {
        params: {
          stage_name: 'Round 5',
        },
      })
      .then(response => {
        setRound5Plays(response.data);
      });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <img
              src={user.avatar_url || `https://robohash.org/${user.name}`}
              alt={user.name}
            />
            <div>
              <span>Bem-vindo,</span>
              <Link to="profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <h1>Fase de grupos</h1>
        <GroupHeader>
          <button type="button" onClick={handlePrevGroup}>
            <FiArrowLeft />
          </button>

          <strong>{`Grupo ${currentGroup + 1}`}</strong>

          <button type="button" onClick={handleNextGroup}>
            <FiArrowRight />
          </button>
        </GroupHeader>

        <Group>
          <TeamGroup>
            {groupResults.map(groupResult => (
              <Team
                key={groupResult.team_id}
                name={groupResult.name}
                image_url={groupResult.avatar}
                score={groupResult.score}
                round={groupResult.round}
              />
            ))}
          </TeamGroup>
          <Plays>
            <h2>Jogos</h2>
            {teamPlays.map(teamPlay => (
              <Play
                key={teamPlay.team_1_name + teamPlay.team_2_name}
                image_url_team_1={teamPlay.team_1_avatar}
                name_team_1={teamPlay.team_1_name}
                round_team_1={teamPlay.round_team_1}
                round_team_2={teamPlay.round_team_2}
                name_team_2={teamPlay.team_2_name}
                image_url_team_2={teamPlay.team_2_avatar}
              />
            ))}
          </Plays>
        </Group>
        <Brackets>
          <h1>Playoffs</h1>
          <Bracket
            r1={round1Plays}
            r2={round2Plays}
            r3={round3Plays}
            r4={round4Plays}
            r5={round5Plays}
          />
        </Brackets>
      </Content>
    </Container>
  );
};

export default Dashboard;
