import React from 'react';

import { Container, HashtagIcon, Title, Separation, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separation></Separation>

      <Description>Canal aberto para conversas.</Description>
    </Container>
  );
}

export default ChannelInfo;