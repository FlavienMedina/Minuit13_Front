import HomeScreen from './views/home'
import EventsScreen from './views/events'
import EventScreen from './views/event'
import EventInfoScreen from './views/eventInfo'
import CreateScreen from './views/create'
import { createStackNavigator, createAppContainer } from "react-navigation";

console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Events: { 
    screen: EventsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Event: { 
    screen: EventScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Info: { 
    screen: EventInfoScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  Create: { 
    screen: CreateScreen,
    navigationOptions: () => ({
      header: null
    }),
  }
});

export default createAppContainer(AppNavigator);