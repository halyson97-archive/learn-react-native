import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Movie from '../components/Movie'

export default class Bookmark extends Component {
  state = {
    bookmarker: []
  }

  componentWillMount(){
    AsyncStorage.getItem('@Netflix:bookmarker').then(result =>{
      let bookmarker = result ? JSON.parser(result) : [];
      this.setState({bookmarker})
    })
  }


    removeFavorite = (movie) => {
      bookmark = this.state.bookmark.filter(bookmarkMovie =>
        bookmarkMovie.show_id !== movie.show_id
      );

      this.setState({ bookmark });
      AsyncStorage.setItem('@Workshop:bookmark', JSON.stringify(bookmark));
    };

  render() {
    return (
      <View style={styles.container}>
        { this.state.bookmarker.map(movie=>(
          <Movie 
            key={movie.id}
            movie={movie}
            favorite={true}
            onFavoritePress={()=>{this.removeFavorite(movie)}}
          />
        ))}
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
