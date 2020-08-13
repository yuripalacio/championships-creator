import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  image_url: string;
  round?: number;
};

const TeamBracket: React.FC<DivProps> = ({
  name,
  image_url,
  round,
  className,
  ...rest
}) => (
  <Container {...rest}>
    <div>
      <img src={image_url} alt="Time 1" />
      <strong className={className}>{name}</strong>
      <span className={className}>{round}</span>
    </div>
  </Container>
);

export default TeamBracket;
