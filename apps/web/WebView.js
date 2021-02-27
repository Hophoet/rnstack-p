import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

export default class Home extends React.Component{
	constructor(props){
		super(props);	
	}


	render(){
		return (
			<WebView
				source={{uri:'https://google.com'}}
				style={styles.container}
				allowsBackForwardNavigationGestures={true}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	}

})
