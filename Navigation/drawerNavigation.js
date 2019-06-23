import React, { Component } from 'react';
import { AppRegistry, Text, View, Button} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

class Screen_One extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE ONE!!!</Text>
      </View>
    );
  }
}

class Screen_Two extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE TWO!!</Text>
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator({
  first: {screen: Screen_One},
  second: {screen: Screen_Two},
});

const App = createAppContainer(DrawerNavigator);

export default App;
