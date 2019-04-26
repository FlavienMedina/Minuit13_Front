import React from 'react';
import { List, ListItem, Text, Body, Right } from 'native-base';

const Event = (props) => (
    <List>
        <ListItem onPress={() => props.navigate('Event', {EventData: props})}>
            <Body>
                <Text>{props.title}</Text>
                <Text note>{props.desc}</Text>
                <Text note>Deadline: {props.deadline}</Text>                
            </Body>
            <Right>
                <Text note>{props.admin}</Text>
            </Right>
        </ListItem>
    </List>
);

export default Event;
