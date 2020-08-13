import React, { HTMLAttributes } from 'react';
import { Container } from './styles';

import TeamBracket from '../TeamBracket';

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

type DivProps = HTMLAttributes<HTMLDivElement> & {
  round: RoundStage;
};

const PlayBracket: React.FC<DivProps> = ({ round, ...rest }) => (
  <Container {...rest}>
    <li className="game game-top">
      <TeamBracket
        className={round.round_team_1 === 16 ? 'winner' : ''}
        name={round.team_1_name}
        image_url={round.team_1_avatar}
        round={round.round_team_1}
      />
    </li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">
      <TeamBracket
        className={round.round_team_2 === 16 ? 'winner' : ''}
        name={round.team_2_name}
        image_url={round.team_2_avatar}
        round={round.round_team_2}
      />
    </li>
    <li className="spacer">&nbsp;</li>
  </Container>
);

export default PlayBracket;
