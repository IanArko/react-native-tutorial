import React, { Component } from 'react';
import { AppRegistry, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class Screen_One extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE ONE!!!</Text>
        <Button
          title = "Go To PAGE TWO"
          onPress={() => this.props.navigation.navigate('second')}
        />
      </View>
    );
  }
}

class Screen_Two extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE TWO!!</Text>
        <Button
          title = "Go to PAGE ONE"
          onPress={() => this.props.navigation.navigate('first')}
        />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  first: {screen: Screen_One},
  second: {screen: Screen_Two},
});

const App = createAppContainer(MainNavigator);

export default App;
