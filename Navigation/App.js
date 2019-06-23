import React, { Component } from 'react';
import { AppRegistry, Text, View, Button} from 'react-native';
import {createDrawerNavigator,
        createAppContainer,
        createStackNavigator,
        createSwitchNavigator} from 'react-navigation';

class Screen_One extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE ONE!!!</Text>
        <Button
            title = "Login"
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
            title = "Login"
            onPress={() => this.props.navigation.navigate('third')}
        />
      </View>
    );
  }
}

class Screen_Three extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE THREE!!</Text>
      </View>
    );
  }
}

class Screen_4 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE 4!</Text>
      </View>
    );
  }
}

class Screen_5 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text> THIS IS PAGE 5!!</Text>
      </View>
    );
  }
}

const Drawer = createDrawerNavigator({
  third: {
    screen: Screen_Three
  },
  four: {
    screen: Screen_4
  },
  five: {
    screen: Screen_5
  },
});

const Router = createSwitchNavigator({
  first: {screen: Screen_One},
  second: {screen: Screen_Two},
  third: {screen: Drawer},
});


const App = createAppContainer(Router);

export default App;
