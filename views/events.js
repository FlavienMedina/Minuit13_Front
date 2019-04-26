import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { AsyncStorage } from 'react-native'
import Event from "../components/eventItem";
import events from "../db/data.json"

export default class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { eventsArr: [] };
  }
  componentWillMount(){
    console.log("--------------- MOUNT ---------------");
    this.getData();
  }
  render() {
    const { navigate } = this.props.navigation;
    if(this.state.eventsArr === null){
      return(
        <Container>
        <Header>
          <Left>
            <Button onPress={() => navigate("Create", {refresh: this})} transparent>
              <Icon name='ios-add' />
            </Button>
          </Left>
          <Body>
            <Title>My Events</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-settings' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={{textAlign: "center",marginTop:20}}>Create or join a event</Text>
        </Content>
      </Container>
      )
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigate("Create", {refresh: this})} transparent>
              <Icon name='ios-add' />
            </Button>
          </Left>
          <Body>
            <Title>My Events</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-settings' />
            </Button>
          </Right>
        </Header>
        <Content>
            {this.state.eventsArr.map((event, key) => {
              return (
                <Event key={key} navigate={navigate} title={event.title} desc={event.desc} deadline={event.deadline} admin={event.admin}></Event>
              );
            })}
        </Content>
      </Container>
    );
  }
  getData = async () => {
    console.log("--------------- getData ---------------");
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      this.setState({ eventsArr: parsed });
    } catch (err) {
      console.log(err);
    }
  }
}