import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue500,
  },
};

import store from './src/store/';
import App from './src/components/App/App';

import { AppRegistry } from 'react-native';

export default class ProjectX extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ProjectX', () => ProjectX);
