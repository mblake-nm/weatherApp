import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, NavigatorIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NavigationMenu extends React.Component {
	constructor(props) {
    super(props);
    this.state = { pressStatus: false};
  }


	_onHideUnderlay(event){
    this.setState({ pressStatus: false });
  }

  render() {
		const homeIcon = <Icon name ="ios-home" size={30} color="#EE7600" />
		const weatherIcon = <Icon name="ios-rainy" size={30} color="#EE7600" />
    return (
      <View style={styles.container}>
				<View style={styles.navigationButton}>
					<TouchableHighlight
						activeOpacity={1}
						style={this.state.pressStatus ? styles.IconPress : styles.Icon}
						onHideUnderlay={this._onHideUnderlay.bind(this)}
          	onPress={ () => this.props.navigator.push({id:'HomePage',})}
						underlayColor={'#2a2a2a'}  >
						<View >
							<Text style={styles.IconImage}>{homeIcon}</Text>
							<Text style={styles.IconText}>Home</Text>
					  </View>
					</TouchableHighlight>
				</View>
				<View style={styles.navigationButton}>
					<TouchableHighlight
						activeOpacity={1}
						style={this.state.pressStatus ? styles.IconPress : styles.Icon}
						onHideUnderlay={this._onHideUnderlay.bind(this)}
          	onPress={() => this.props.navigator.push({id:'WeatherPage',})}
						underlayColor={'#2a2a2a'} >
						<View>
							<Text style={styles.IconImage}>{weatherIcon}</Text>
							<Text style={styles.IconText}>Weather</Text>
					  </View>
					</TouchableHighlight>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#545454',
		width: '100%',
		height: 70,
		paddingBottom: 2,
		paddingTop: 2,
		flexDirection: 'row',
  },
	navigationButton: {
		flexDirection: 'column',
	},
	IconImage: {
		marginTop: 8,
		alignSelf: 'center',
		fontSize: 8,
	},
	IconText: {
		alignSelf: 'center',
		color: '#EE7600',
		fontSize: 8,
		fontWeight: '900'
	},
 	Icon: {
		height: '100%',
		width: 80,
		borderRightWidth: 1,
		borderRightColor:'#131313',
		paddingBottom: 15,
		paddingLeft: 10,
		paddingRight: 10,
	},
	IconPress: {
		height: '100%',
		width: 80,
		borderRightWidth: 1,
		borderRightColor:'#131313',
		paddingBottom: 15,
		paddingLeft: 10,
		paddingRight: 10,


	},
	// text: {
	// 	marginTop: 2,
	// 	color: '#EE7600',
	// 	fontSize: 8,
	// 	flex: 2,
	//
	// },
});
