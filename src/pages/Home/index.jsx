import React from 'react';
import { Text, Image } from 'react-native';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Image source={{uri: 'https://animesonlinegames.com/wp-content/themes/superanimes/img/logo2.png'}} style={{width: 252, height: 102, resizeMode: 'contain', marginTop: "-20"}} />
      <Text>Home</Text>
    </Container>
  );
};

