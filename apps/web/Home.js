import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class Home extends React.Component{
	constructor(props){
		super(props);	
	}


	render(){
		return (
			<View style={styles.container}>	
				<Text>HOME</Text>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		
	}

})
