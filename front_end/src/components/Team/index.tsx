import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  image_url: string;
  score: number;
  round: number;
};

const Team: React.FC<DivProps> = ({
  name,
  image_url,
  score,
  round,
  ...rest
}) => (
  <Container {...rest}>
    <div>
      <img src={image_url} alt="Time 1" />
      <strong>{name}</strong>
      <span>
        <span className="score">{score}</span>
        <span>|</span>
        <span className="round">{round}</span>
      </span>
    </div>
  </Container>
);

export default Team;
