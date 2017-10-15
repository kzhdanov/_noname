import { screenTypes } from '../../utils/const';

const initialState = {
  activeScreen: screenTypes.active,
};

const SCREENS = 'SCREENS';
const SET_ACTIVE_SCREEN = `${SCREENS}/SET_ACTIVE_SCREEN`;

export default function screens(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_SCREEN:
      return {
        ...state,
        activeScreen: action.screen,
      };
    default:
      return state;
  }
}

export const setScreen = screen => {
  return { type: SET_ACTIVE_SCREEN, screen };
}