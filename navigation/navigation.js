import React from 'react';
import { Navigator } from 'react-native';
import HomePage from '../components/homePage'
import WeatherPage from '../components/weatherPage'

/*export const Routes = StackNavigator({
  Home: { screen: HomePage },
	Weather: { screen: WeatherPage },
}); */


export default class Navigation extends React.Component{
  render() {
    return (
      <Navigator

        initialRoute={{id: 'HomePage'}}
				renderScene={this.navigatorRenderScene} />
    );
  }
		navigatorRenderScene(route, navigator) {
		_navigator = navigator;
		switch (route.id) {
			case 'HomePage':
				return (<HomePage navigator={navigator} id='HomePage' title="Home Page"/>);
			case 'WeatherPage':
				return (<WeatherPage navigator={navigator} id='WeatherPage' title="Weather Page" />);
		}
	}
}
