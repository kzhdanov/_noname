import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { headerCss } from '../../styles/';

@connect(
  state => ({
    activeScreen: state.screens.activeScreen,
  }), null
)
export default class Header extends Component {

  static propTypes = {
    activeScreen: PropTypes.string.isRequired,
    locale: PropTypes.object.isRequired,
  }

  render() {
    const { locale, activeScreen } = this.props;

    return (
      <View style={headerCss.container}>
        <Text/>
        <Text
          style={headerCss.title}
        >
          {locale[activeScreen]}
        </Text>
        <Text/>
      </View>
    );
  }
}
