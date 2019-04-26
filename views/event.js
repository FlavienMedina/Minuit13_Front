import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Text, Card, CardItem } from 'native-base';
import { View } from 'react-native'


const guests = [
  {name:"Flavien"},
  {name:"Flavien"},
  {name:"Flavien"},
];

export default class EventsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const event = this.props.navigation.state.params.EventData;

    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigate("Events")} transparent>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{event.title}</Title>
          </Body>
          <Right>
            <Button onPress={() => navigate("Info")} transparent>
              <Icon name='ios-information-circle' />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={{alignItems:'center'}}>
        {/* <Card style={{width:250}}>
            <CardItem>
              <Body>
                <Text>Question ?</Text>
                <View style={{padding:3, marginBottom:2,width:"100%"}}>
                <View style={{backgroundColor:"red",width:"0%", height:25, position:"absolute", opacity:10}}></View>
                  <View style={{display:"flex",flexDirection:"row"}}>
                    <Text onPress={()=> this._vote(this)} id="yes">Yes</Text>
                    <Text style={{marginLeft:"auto",marginRight:10}}>0</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card> */}
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }

  _vote(data){
    console.log(data);
  }
}