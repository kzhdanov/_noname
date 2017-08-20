import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/';
import App from './src/components/App/App';

import { AppRegistry } from 'react-native';

export default class ProjectX extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ProjectX', () => ProjectX);
