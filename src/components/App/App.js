import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Header from '../Header/Header';
import { loadTodos } from '../../store/reducers/todos';
import { appCss } from '../../styles/';
import TodosList from "../TodosList/TodosList";
import localeDecorator from '../../decorators/localeDecorator';
import Footer from "../Footer/Footer";

@localeDecorator()
@connect(null, { loadTodos })
export default class App extends Component {

  static propTypes = {
    locale: PropTypes.object.isRequired,
    loadTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    const { locale } = this.props;

    return (
      <View style={appCss.container}>
        <Header locale={locale.header} />
        <TodosList />
        <Footer />
      </View>
    );
  }
}
