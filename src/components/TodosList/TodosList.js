import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { DoubleBounce } from 'react-native-loader';

import { todoListCss } from '../../styles/';

export default class TodosList extends Component {

  static propTypes = {}

  render() {
    return (
      <View style={todoListCss.container}>
        <DoubleBounce size={10} color="#1CAFF6" />
      </View>
    );
  }
}
