import React, { Component } from 'react';
import { Container, Header, Tabs, Tab } from 'native-base';

export default class EventsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Tabs>
          <Tab heading="Event">
          </Tab>
          <Tab heading="Guests">
          </Tab>
        </Tabs>
      </Container>
    );
  }
}