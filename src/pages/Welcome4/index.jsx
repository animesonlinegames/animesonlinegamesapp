import React from 'react';
import { Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Welcome4() {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Text style={{color: "white", fontSize: "32px", textAlign: "center"}}>Bora começar a assistir?</Text>
      <Image source={{uri:"https://i.imgur.com/Peot19R.png"}} style={{width: "40%", height: "40%", resizeMode: "contain"}} />
      <Text style={{color: "gray", textAlign: "center", padding: "5px", fontSize:"16px"}}>Sem perca de tempo, vamos agora!!</Text>
    </Container>
          <Button
        title="Vamos ver anime! »"
        color="#27ae60"
        width="90%"
        style={{marginBottom: "20px"}}
        onPress={() =>navigation.navigate('Home')}
      />
    </>
  );
};