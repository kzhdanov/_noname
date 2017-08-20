import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { loadTodos } from '../../store/reducers/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

@connect(null, { loadTodos })
export default class App extends Component {

  static propTypes = {
    loadTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          123
        </Text>
      </View>
    );
  }
}
