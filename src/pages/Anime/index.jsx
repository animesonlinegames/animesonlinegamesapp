import React from 'react';
import { Text, Image } from 'react-native';
import { Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Listagem, InfoAnime, Centralize, ImagemAnime, Row } from './styles';

export function Anime() {
  return (
    <Container>
      <Centralize>
      <Text style={{color:"#27ae60", fontSize: "32px"}}>
      One Piece
      </Text>
      </Centralize>
      <Row>
      <ImagemAnime>
      <Image source={{uri: 'https://animesonlinegames.com/wp-content/uploads/2019/01/one-piece-todos-os-episodios.jpg'}} style={{display: "absolute", margin: 0, width: 140, height: 200, resizeMode: 'cover', marginTop: "-20"}} />
      </ImagemAnime>
      <InfoAnime>
      <Text style={{color:"white", maxWidth: "170px"}}><Text style={{color:"#27ae60"}}>Ano:</Text>{' '}1999</Text>
      <Text style={{color:"white", maxWidth: "170px"}}><Text style={{color:"#27ae60"}}>Diretor:</Text>{' '}Konosuke Uda</Text>
      <Text style={{color:"white", maxWidth: "170px"}}><Text style={{color:"#27ae60"}}>Estúdio:</Text>{' '}Toei Animation</Text>
      <Text style={{color:"white", maxWidth: "170px"}}><Text style={{color:"#27ae60"}}>Status:</Text>{' '}Lançamento (<Text style={{color:"#27ae60"}}>Domingo</Text>)</Text>
      <Text style={{color:"white", maxWidth: "170px", padding: 5, marginLeft: -5}}><Text style={{color:"#27ae60", marginBottom: 15}}>Gêneros:</Text>{' '}<Text style={{padding: 3, borderColor: '#27ae60', borderWidth: 2, borderRadius: 7, marginRight: 5, marginBottom: 7, marginTop: 7}}>Ação</Text></Text>
      </InfoAnime>
      </Row>
      <Centralize>
      <Row>
      <Button  
        icon={<Icon name="thumbs-up" size={20} color="white" />} 
        type="outline"
        buttonStyle={{borderColor:"#27ae60", marginRight: 10}}
      />
      <Button  
        icon={<Icon name="thumbs-down" size={20} color="white" />} 
        type="outline"
        buttonStyle={{borderColor:"#27ae60", marginRight: 10}}
      />
      <Button  
        icon={<Icon name="heart" size={20} color="white" />} 
        type="outline"
        buttonStyle={{borderColor:"#27ae60", marginRight: 10}}
      />
      <Button  
        icon={<Icon name="bookmark" size={20} color="white" />} 
        type="outline"
        buttonStyle={{borderColor:"#27ae60", marginRight: 10}}
      />
      </Row>
      </Centralize>
      <Centralize>
      <Text style={{color:"white", fontSize: "16px"}} >
        Sinopse:
      </Text>
      <Text style={{color:"grey", fontSize: "12px", padding: 3}}>
      Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. 
      Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. “Meu 
      tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!”. Foi a revelação 
      do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis… 
      Assim começou a Grande Era dos Piratas! Monkey D. Luffy de 17 anos, desafia a definição de pirata. Sem a típica 
      personalidade vil e cruel, suas motivações são simples: a aventura e as possibilidades de conhecer novos amigos. 
      Luffy e seus companheiros partem em direção à Grand Line, a mais perigosa das rotas do mundo, em incríveis 
      aventuras, revelando mistérios e enfrentando poderosos oponentes em busca do One Piece.
      </Text>
      </Centralize>
      <Listagem>
      <SearchBar 
        placeholder="Digite um número de episódio..." 
        /*onChangeText={this.updateSearch} 
        value={search}*/
      />
      <Divider orientation="horizontal" color="white" width={1} />
      <Text style={{color: "white", padding: 5, fontSize: 18}}>Episódio 1</Text>
      </Listagem>
    </Container>
  );
};

