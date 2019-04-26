import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Form, Item, Label, Input, DatePicker } from 'native-base';
import { AsyncStorage } from 'react-native'

export default class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      titleInput: "",
      descInput: "",
      titleErr: false,
      descErr: false
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigate("Events")} transparent>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Create</Title>
          </Body>
          <Right>
              <Icon onPress={() => this._saveData()} name='ios-checkmark' style={{fontSize: 45, color: 'blue'}} />
          </Right>
        </Header>
        <Content >
          <Form>
            <Item  error={this.state.titleErr}>
              <Label>title</Label>
              <Input onChangeText={(value) => this.setState({titleInput:value})} />
              <Icon name='close-circle' value={this.state.titleInput} style={{display: this.state.titleErr ? "flex" : "none"}}/>
            </Item>
            <Item error={this.state.descErr}>
              <Label>description</Label>
              <Input onChangeText={(value) => this.setState({descInput:value})} />
              <Icon name='close-circle' value={this.state.descInput} style={{display: this.state.descErr ? "flex" : "none"}}/>
            </Item>
            {/* <Item stackedLabel>
              <Label>catégories</Label>
              <Input onChangeText={(event) => this.setState({cate:event.nativeEvent.text})} />
            </Item> */}
            <Item stackedLabel>
              <DatePicker
                locale={"fr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Deadline"
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
  _saveData(){
    console.log("--------------- saveData ---------------");
    let title = this.state.titleInput;
    let desc = this.state.descInput;
    if(title === "" || desc === ""){
      if (title === "") {
        this.setState({titleErr: true})
      }
      else{
        this.setState({titleErr: false})
      }
      if (desc === "") {
        this.setState({descErr: true})
      }
      else{
        this.setState({descErr: false})
      }
    }
    else{
      console.log(`
        title : ${title}
        desc : ${desc}
      `);
      let events = [
        {
            "title": "Five Efrei",
            "desc": "Doing what you like will always...",
            "deadline": "02/04/2015",
            "admin": "Flavien"
        },
        {
            "title": "Resto Efrei",
            "desc": "Doing what you like will always...",
            "deadline": "02/04/2015",
            "admin": "Flavien"
        },
        {
            "title": "Basket Efrei",
            "desc": "Doing what you like will always...",
            "deadline": "02/04/2015",
            "admin": "Flavien"
        },
        {
            "title": "Laser Game Efrei",
            "desc": "Doing what you like will always...",
            "deadline": "02/04/2015",
            "admin": "Flavien"
        },
        {
            "title": "Poker Efrei",
            "desc": "Doing what you like will always...",
            "deadline": "02/04/2015",
            "admin": "Flavien"
        }
      ];
      events.push({title,desc});
      console.log(events);
      
      AsyncStorage.setItem('user', JSON.stringify(events));
      this.props.navigation.state.params.refresh.getData();
    }
  }
}
