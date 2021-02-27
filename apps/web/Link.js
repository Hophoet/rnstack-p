
import React from 'react';
import {View, StyleSheet, Text, Linking, Button, ActivityIndicator} from 'react-native';

export default class Link extends React.Component{
	constructor(props){
		super(props);	
		this.state = {
			openLinkIsLoading:false
		}
	}

	_openLink = () => {
		this.setState({openLinkIsLoading:true})
		let url ='vnd.youtube://';
		Linking.canOpenURL(url)
		.then(response => {
			this.setState({openLinkIsLoading:false})
			Linking.openURL(url)
			.then( () => {
				console.log('open successfully');
			})
			.catch(error => {
				console.log('open failed');
			})
			
		})
		.catch(error=>{
			alert("url can't be opened");	
		})

	}

	render(){
		return (
			<View style={styles.container}>
				{ this.state.openLinkIsLoading &&
				<ActivityIndicator size='large' color='gray'/>
				}
				<Button 
					title='open link'
					onPress={this._openLink}
				/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}

})
