import React from 'react';
import { Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={{uri: 'https://animesonlinegames.com/wp-content/themes/superanimes/img/logo2.png'}} style={{width: 252, height: 102, resizeMode: 'contain', marginTop: "-20"}} />
      <Text>Home</Text>
      <Button
        title="Testar Anime"
        color="#27ae60"
        width="90%"
        style={{marginBottom: "20px"}}
        onPress={() =>navigation.navigate('Anime')}
      />
    </Container>
  );
};

