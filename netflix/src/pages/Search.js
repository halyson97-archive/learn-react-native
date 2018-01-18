import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ActivityIndicator,
	AsyncStorage
} from 'react-native';

import Movie from '../components/Movie';

export default class Search extends Component {

	state = {
		search: '',
		movie: null,
		loading: false,
		bookmarker: []
	}

	componentWillMount(){
		AsyncStorage.getItem('@Netflix:bookmarker').then(result =>{
			let bookmarker = result ? JSON.parser(result) : [];
			this.setState({bookmarker})
		})
	}

	isFavorite = ()=>{
		return this.state.bookmarker.filter(bookmarkerMovie=>{
			return bookmarkerMovie.id === this.state.movie.id;
		}).length > 0;
	}

	fetchMovies = async (search) => {
		if(search.length > 0){
			this.setState({loading: true});

			try {
				 const response = await fetch('http://186.224.238.2:1916/AutoAtendimento/Cidade');

				if(!response.ok) throw {};


				const movie = await response.json();

				console.log(movie)

				this.setState({movie, loading: false})
			} catch(e) {
				// statements
				console.log(e);
			}
		} else {
			this.setState({movie: null});
		}
	}

	setFavorite = () =>{
		let bookmarker = this.state.bookmarker;

		if(this.isFavorite()){
			bookmarker = bookmarker.filter(bookmarkerMovie=>{
				return bookmarkerMovie.id !== this.state.movie.id;
			})
		} else {
			bookmarker.push(this.state.movie);
		}

		this.setState({bookmarker})

		AsyncStorage.setItem('@Netflix:bookmarker', JSON.stringify(bookmarker));
	}


  	render() {
    	return (
      		<View style={styles.container}>
	        <TextInput
	        	style={styles.input}
	        	placeholder="Digite sua busca"
	        	onChangeText={this.fetchMovies}
	        />

	        { this.state.loading &&
	        	<ActivityIndicator
	        		style={styles.loading}
	        		color="#FFF"
	        		size="small"
	        	/>
	        }

	        { this.state.movie &&
	        	<Movie 
	        		movie={this.state.movie} 
	        		onFavoritePress={this.setFavorite}
	        		favorite={this.isFavorite()}
	        	/>
	        }
        
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    padding: 20,
	    backgroundColor: '#333'
  	},

  	icon:{
	    width: 24,
	    height: 24,
  	},

  	input:{
	    alignSelf: 'stretch',
	    backgroundColor: '#FFF',
	    height: 40,
	    borderRadius: 3,
	    marginTop: 20,
	    fontSize: 12,
	    paddingHorizontal: 20,
	    fontFamily: 'Helvetica'
  	},

	  	loading:{
	  	marginTop: 20
  	}
  
});
