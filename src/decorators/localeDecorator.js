import React, { Component } from 'react';
import locale from '../locale/ru';

export default function localeDecorator(localeKey) {
  return function wrapWithComponent(WrappedComponent) {
    class LocaleDecorator extends Component {

      render() {
        const options = {
          ...this.props,
          locale,
        };

        return <WrappedComponent {...options} />;
      }

    }

    return LocaleDecorator;
  };
}