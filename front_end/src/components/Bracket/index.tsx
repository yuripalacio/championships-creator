import React, { HTMLAttributes } from 'react';

import { Container } from './styles';
import TeamBracket from './TeamBracket';
import PlayBracket from './PlayBracket';

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
  r1: RoundStage[];
  r2: RoundStage[];
  r3: RoundStage[];
  r4: RoundStage[];
  r5: RoundStage[];
};

const Bracket: React.FC<DivProps> = ({ r1, r2, r3, r4, r5, ...rest }) => {
  if (
    r1.length <= 0 ||
    r2.length <= 0 ||
    r3.length <= 0 ||
    r4.length <= 0 ||
    r5.length <= 0
  ) {
    return <Container {...rest} />;
  }
  return (
    <Container {...rest}>
      <main id="tournament">
        <ul className="round round-1">
          {r1.map(round => (
            <PlayBracket key={round.id} round={round} />
          ))}
        </ul>
        <ul className="round round-2">
          <li className="spacer">&nbsp;</li>
          <li className="game game-top winner">
            <TeamBracket
              className={r2[0].round_team_1 === 16 ? 'winner' : ''}
              name={r2[0].team_1_name}
              image_url={r2[0].team_1_avatar}
              round={r2[0].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[0].round_team_2 === 16 ? 'winner' : ''}
              name={r2[0].team_2_name}
              image_url={r2[0].team_2_avatar}
              round={r2[0].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[1].round_team_1 === 16 ? 'winner' : ''}
              name={r2[1].team_1_name}
              image_url={r2[1].team_1_avatar}
              round={r2[1].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[1].round_team_2 === 16 ? 'winner' : ''}
              name={r2[1].team_2_name}
              image_url={r2[1].team_2_avatar}
              round={r2[1].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[2].round_team_1 === 16 ? 'winner' : ''}
              name={r2[2].team_1_name}
              image_url={r2[2].team_1_avatar}
              round={r2[2].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[2].round_team_2 === 16 ? 'winner' : ''}
              name={r2[2].team_2_name}
              image_url={r2[2].team_2_avatar}
              round={r2[2].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[3].round_team_1 === 16 ? 'winner' : ''}
              name={r2[3].team_1_name}
              image_url={r2[3].team_1_avatar}
              round={r2[3].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[3].round_team_2 === 16 ? 'winner' : ''}
              name={r2[3].team_2_name}
              image_url={r2[3].team_2_avatar}
              round={r2[3].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[4].round_team_1 === 16 ? 'winner' : ''}
              name={r2[4].team_1_name}
              image_url={r2[4].team_1_avatar}
              round={r2[4].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[4].round_team_2 === 16 ? 'winner' : ''}
              name={r2[4].team_2_name}
              image_url={r2[4].team_2_avatar}
              round={r2[4].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[5].round_team_1 === 16 ? 'winner' : ''}
              name={r2[5].team_1_name}
              image_url={r2[5].team_1_avatar}
              round={r2[5].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[5].round_team_2 === 16 ? 'winner' : ''}
              name={r2[5].team_2_name}
              image_url={r2[5].team_2_avatar}
              round={r2[5].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[6].round_team_1 === 16 ? 'winner' : ''}
              name={r2[6].team_1_name}
              image_url={r2[6].team_1_avatar}
              round={r2[6].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[6].round_team_2 === 16 ? 'winner' : ''}
              name={r2[6].team_2_name}
              image_url={r2[6].team_2_avatar}
              round={r2[6].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[7].round_team_1 === 16 ? 'winner' : ''}
              name={r2[7].team_1_name}
              image_url={r2[7].team_1_avatar}
              round={r2[7].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[7].round_team_2 === 16 ? 'winner' : ''}
              name={r2[7].team_2_name}
              image_url={r2[7].team_2_avatar}
              round={r2[7].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-3">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r3[0].round_team_1 === 16 ? 'winner' : ''}
              name={r3[0].team_1_name}
              image_url={r3[0].team_1_avatar}
              round={r3[0].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r3[0].round_team_2 === 16 ? 'winner' : ''}
              name={r3[0].team_2_name}
              image_url={r3[0].team_2_avatar}
              round={r3[0].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r3[1].round_team_1 === 16 ? 'winner' : ''}
              name={r3[1].team_1_name}
              image_url={r3[1].team_1_avatar}
              round={r3[1].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r3[1].round_team_2 === 16 ? 'winner' : ''}
              name={r3[1].team_2_name}
              image_url={r3[1].team_2_avatar}
              round={r3[1].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[2].round_team_1 === 16 ? 'winner' : ''}
              name={r2[2].team_1_name}
              image_url={r2[2].team_1_avatar}
              round={r2[2].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[2].round_team_2 === 16 ? 'winner' : ''}
              name={r2[2].team_2_name}
              image_url={r2[2].team_2_avatar}
              round={r2[2].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r2[3].round_team_1 === 16 ? 'winner' : ''}
              name={r2[3].team_1_name}
              image_url={r2[3].team_1_avatar}
              round={r2[3].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r2[3].round_team_2 === 16 ? 'winner' : ''}
              name={r2[3].team_2_name}
              image_url={r2[3].team_2_avatar}
              round={r2[3].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-4">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r4[0].round_team_1 === 16 ? 'winner' : ''}
              name={r4[0].team_1_name}
              image_url={r4[0].team_1_avatar}
              round={r4[0].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r4[0].round_team_2 === 16 ? 'winner' : ''}
              name={r4[0].team_2_name}
              image_url={r4[0].team_2_avatar}
              round={r4[0].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r4[1].round_team_1 === 16 ? 'winner' : ''}
              name={r4[1].team_1_name}
              image_url={r4[1].team_1_avatar}
              round={r4[1].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r4[1].round_team_2 === 16 ? 'winner' : ''}
              name={r4[1].team_2_name}
              image_url={r4[1].team_2_avatar}
              round={r4[1].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-5">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            <TeamBracket
              className={r5[0].round_team_1 === 16 ? 'winner' : ''}
              name={r5[0].team_1_name}
              image_url={r5[0].team_1_avatar}
              round={r5[0].round_team_1}
            />
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            <TeamBracket
              className={r5[0].round_team_2 === 16 ? 'winner' : ''}
              name={r5[0].team_2_name}
              image_url={r5[0].team_2_avatar}
              round={r5[0].round_team_2}
            />
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-6">
          <li className="game game-top winner">
            <TeamBracket
              className="winner"
              name={
                r5[0].round_team_1 === 16
                  ? r5[0].team_1_name
                  : r5[0].team_2_name
              }
              image_url={
                r5[0].round_team_1 === 16
                  ? r5[0].team_1_avatar
                  : r5[0].team_2_avatar
              }
              round={
                r5[0].round_team_1 === 16
                  ? r5[0].round_team_1
                  : r5[0].round_team_2
              }
            />
          </li>
        </ul>
      </main>
    </Container>
  );
};

export default Bracket;
