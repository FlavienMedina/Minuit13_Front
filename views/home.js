import React, { Component } from 'react';
import { Container, Item, Content, Form, Label, Input, Button, Icon, Title, Text } from 'native-base';
import {View, StyleSheet, ImageBackground} from 'react-native'
export default class EventsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container  style={ styles.container }>
        <Content style={{width:"100%", height:500}}>
          <View style={{ backgroundColor: '#3E4EA9', width:"100%", height:100, alignItems: 'center' }} >
          <Form style={styles.loginForm}>
            <Item>
              <Label style={{color: "white"}}>Username</Label>
              <Input style={{color: "white"}}/>
            </Item>
            <Item>
              <Label style={{color: "white"}}>Password</Label>
              <Input secureTextEntry={true} style={{color: "white"}}/>
            </Item>
            <Button primary style={{marginTop:10,marginLeft:10,alignItems:'center', width:300, textAlign:'center'}} onPress={() => navigate("Events")}><Text> Sign In </Text></Button>
          </Form>
          <Text style={{marginTop: 80, color:"white" }}>Signup</Text>
          </View>
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
 
    // Set content's vertical alignment.
    justifyContent: 'center',
     
    // Set content's horizontal alignment.
    alignItems: 'center',
     
    // Set hex color code here.
    backgroundColor: '#3E4EA9',  },
  loginForm: {
    color: "white",
    alignItems:'center',
      width:300,
      marginTop: 300,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  },
});