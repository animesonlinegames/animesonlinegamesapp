import React from 'react';
import { Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Welcome1() {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Text style={{color: "white", fontSize: "32px", textAlign: "center"}}>Olá, seja bem-vindo(a)!</Text>
      <Image source={{uri:"https://i.imgur.com/Kua1PtU.png"}} style={{width: "40%", height: "40%", resizeMode: "contain"}} />
      <Text style={{color: "gray", textAlign: "center", padding: "5px", fontSize:"16px"}}>Obrigado(a) por baixar nossa aplicação.
      Aqui você vai poder ver os seus animes favoritos.</Text>
    </Container>
          <Button
        title="Seguinte »"
        color="#27ae60"
        width="90%"
        style={{marginBottom: "20px"}}
        onPress={() =>navigation.navigate('Welcome2')}
      />
    </>
  );
};