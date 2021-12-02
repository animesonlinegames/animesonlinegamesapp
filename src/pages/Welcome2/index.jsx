import React from 'react';
import { Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Welcome2() {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Text style={{color: "white", fontSize: "32px", textAlign: "center"}}>Favorite seus animes!</Text>
      <Image source={{uri:"https://i.imgur.com/uffmgXK.png"}} style={{width: "40%", height: "40%", resizeMode: "contain"}} />
      <Text style={{color: "gray", textAlign: "center", padding: "5px", fontSize:"16px"}}>Que tal eu te ajudar a maratonar alguns animes? Crie uma conta e favorite seus animes e economize alguns passos.</Text>
    </Container>
          <Button
        title="Seguinte »"
        color="#27ae60"
        width="90%"
        style={{marginBottom: "20px"}}
        onPress={() =>navigation.navigate('Welcome3')}
      />
    </>
  );
};