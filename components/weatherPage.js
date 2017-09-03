import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import NavigationMenu from './navigation-menu'


export default class WeatherPage extends React.Component {

  render() {
    return (
			<View style={styles.container}>
				<View style={styles.pageTitle}>
					<Text style={styles.pageTitleText}>Weather Page</Text>
				</View>
				<View style={styles.content}></View>
				<View>
					<NavigationMenu {...this.props} />
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
		minHeight: '100%',
  },
	content: {
		flex: 1,
	},
	pageTitle: {
		marginTop: 50,
		marginLeft: 10,
	},
	pageTitleText: {
		fontWeight: '900',
		fontSize: 30,
	}
});
