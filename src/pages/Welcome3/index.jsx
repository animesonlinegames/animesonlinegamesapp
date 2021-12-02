import React from 'react';
import { Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Welcome3() {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Text style={{color: "white", fontSize: "32px", textAlign: "center", padding: "5px"}}>Assista em qualquer lugar!</Text>
      <Image source={{uri:"https://i.imgur.com/sWcmQx1.png"}} style={{width: "40%", height: "40%", resizeMode: "contain"}} />
      <Text style={{color: "gray", textAlign: "center", padding: "5px", fontSize:"16px"}}>Onde você tem internet, têm centenas de episódios para ver! Descontraia vendo seus animes bastando ter uma conexão á internet seja numa floresta, parque ou até no trabalho.</Text>
    </Container>
          <Button
        title="Seguinte »"
        color="#27ae60"
        width="90%"
        style={{marginBottom: "20px"}}
        onPress={() =>navigation.navigate('Welcome4')}
      />
    </>
  );
};