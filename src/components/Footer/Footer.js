import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BottomNavigation } from 'react-native-material-ui';
import {
  screenTypes, allIcon, doneIcon, failedIcon
} from '../../utils/const';
import { setScreen } from '../../store/reducers/screens';

@connect(
  state => ({
    screens: state.screens,
  }), {
    setScreen,
  }
)
export default class Footer extends Component {

  static propTypes = {
    screens: PropTypes.object.isRequired,

    setScreen: PropTypes.func.isRequired,
  }

  onPressFailed = () => this.props.setScreen(screenTypes.failed);
  onPressActive = () => this.props.setScreen(screenTypes.active);
  onPressDone = () => this.props.setScreen(screenTypes.done);

  render() {
    return (
      <BottomNavigation
        active={this.props.screens.activeScreen}
        hidden={false}
        style={{container: {}}}
      >
        <BottomNavigation.Action
          key={screenTypes.failed}
          icon={failedIcon}
          label={screenTypes.failed}
          onPress={this.onPressFailed}
        />
        <BottomNavigation.Action
          key={screenTypes.active}
          icon={allIcon}
          label={screenTypes.active}
          onPress={this.onPressActive}
        />
        <BottomNavigation.Action
          key={screenTypes.done}
          icon={doneIcon}
          label={screenTypes.done}
          onPress={this.onPressDone}
        />
      </BottomNavigation>
    );
  }
}
