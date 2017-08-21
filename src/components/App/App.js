import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { DoubleBounce } from 'react-native-loader';
import { loadTodos } from '../../store/reducers/todos';
import { appCss } from '../../styles/';

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
      <View style={appCss.container}>
        <DoubleBounce size={10} color="#1CAFF6" />
      </View>
    );
  }
}
