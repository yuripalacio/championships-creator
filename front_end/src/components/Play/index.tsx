import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HTMLAttributes<HTMLDivElement> & {
  image_url_team_1: string;
  name_team_1: string;
  round_team_1: number;
  round_team_2: number;
  name_team_2: string;
  image_url_team_2: string;
};

const Play: React.FC<DivProps> = ({
  image_url_team_1,
  name_team_1,
  round_team_1,
  round_team_2,
  name_team_2,
  image_url_team_2,
  ...rest
}) => (
  <Container {...rest}>
    <div>
      <img src={image_url_team_1} alt="Time 1" />
      <strong>{name_team_1}</strong>
      <span className={round_team_1 === 16 ? 'winner' : ''}>
        {round_team_1}
      </span>
      <span>x</span>
      <span className={round_team_2 === 16 ? 'winner' : ''}>
        {round_team_2}
      </span>
      <strong>{name_team_2}</strong>
      <img src={image_url_team_2} alt="Time 1" />
    </div>
  </Container>
);

export default Play;
