import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var teste = ()=>{
  	return Math.floor(Math.random() * 100 + 1)
}


export default class Movie extends Component {

  
  render() {
    return (
	    <View style={styles.container}>
	    	<Image 
	    		style={styles.poster}
	    		resizeMode='contain'
	    		source={{
	    			uri: 'https://img3.ibxk.com.br/2014/06/13/13145034906534.jpg?w=480&h=280&mode=crop',
	    			width: 276,
	    			height: 395
	    		}}    	
	    	/>

	    	<View style={styles.infoContainer}>
	    		<Text style={styles.title}> {this.props.movie.Data[teste()].Nome}</Text>
	    		<Text 
	    			style={styles.description}
	    			numberOfLines={5}
	    			ellipsizeMode="tail"
	    		>
	    			{this.props.movie.Data[teste()].Nome} {this.props.movie.Data[teste()].Estado.Nome}
	    		</Text>

	    		<TouchableOpacity
	    			style={styles.button}
	    			onPress={this.props.onFavoritePress}
	    		>
	    			<Text style={styles.buttonText}>
	    				{this.props.favorite 
	    					? 'Remover dos favoritos'
	    					: 'Adicionar aos favoritos'
	    				}
	    			</Text>
	    		</TouchableOpacity>

	    	</View>
	    </View>
    );
  }
}



const styles = StyleSheet.create({
  	container: {
	    flexDirection: 'row',
	    marginTop: 20,
	    paddingTop: 20,
	    borderTopWidth: 1,
	    backgroundColor: '#444'
  	},

  	poster: {
	    width: 120,
	    height: 172,
	},

	infoContainer: {
	    marginLeft: 10,
	    width: 200,
	},

	title: {
	    color: '#FFF',
	    fontWeight: 'bold',
	    fontSize: 16,
	},

  	description:{
	    color: '#ccc',
	    marginTop: 10,
	    fontSize: 14,
	    lineHeight: 20
  	},

  	button:{
	    backgroundColor: '#be3232',
	    alignSelf: 'stretch',
	    height: 30,
	    borderRadius: 3,
	    alignItems: 'center',
	    justifyContent: 'center',
	    marginTop: 10,
  	},

	buttonText:{
	  	color: '#FFF',
	  	fontSize: 12,
	  	fontWeight: 'bold'
  	}
  
});
