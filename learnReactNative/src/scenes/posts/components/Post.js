import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>
          Title Post
        </Text>
        <Text style={styles.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et elit vel quam euismod tristique. Aliquam sed quam vehicula quam aliquam sagittis. Nam a nulla fermentum, porta metus pharetra, dapibus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque placerat ipsum nec tincidunt cursus. Nunc dolor tellus, ornare quis fringilla vitae, sollicitudin a massa. Aliquam euismod massa augue. Morbi neque ipsum, finibus ut pharetra sed, lobortis et risus. Sed blandit erat pretium metus ornare, vel elementum ipsum varius. Cras felis ante, tempor vitae est non, tincidunt consequat risus. Sed erat justo, placerat vitae rhoncus ut, tincidunt nec urna.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  postTitle:{
  	fontSize: 18,
  	fontWeight: 'bold'
  },
  postDescription: {
  	marginTop: 10
  }
  
});
