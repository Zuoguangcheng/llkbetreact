import {combineReducers} from 'redux';
import {AINFO, BINFO, SUPPORTA, SUPPORTB, PRESSINFO, SUPPORT, PLAYINFO, WHICHPLAY, SUPPORTWIICHPLAY, SUPPORTGOLD, CONFIRM} from '../actions/action';

function InfoAState(state = {}, action) {
  switch (action.type) {
    case AINFO:
      return action.playA;
    default:
      return state;
  }
}

function InfoBState(state = {}, action) {
  switch (action.type) {
    case BINFO:
      return action.playB;
    default:
      return state;
  }
}

function supportState(state=["none", "none"], action) {

    switch (action.type) {
      case SUPPORTA:
        return Object.assign({}, state, ["block", "none"]);
      case SUPPORTB:
        return Object.assign({}, state, ["none", "block"]);
      default:
        return state;
    }
}

function bottomShow(state={PressInfo : "block", support : "none", playInfo : "none", confirm : "none"}, action) {
  switch (action.type) {
    case PRESSINFO:
      return Object.assign({}, state, {PressInfo : "block", support : "none", playInfo : "none", confirm : "none"});
    case SUPPORT:
      return Object.assign({}, state, {PressInfo : "none", support : "block", playInfo : "none", confirm : "none"});
    case PLAYINFO:
      return Object.assign({}, state, {PressInfo : "none", support : "none", playInfo : "block", confirm : "none"});
    case CONFIRM:
      return Object.assign({}, state, {PressInfo : "none", support : "block", playInfo : "none", confirm : "block"});
    default:
      return state;
  }
}

function whichPlay(state="playBBBB", action) {
    switch (action.type) {
      case WHICHPLAY :
        return action.playName;
      default:
        return state;
    }
}

function supportWhichPlay(state="", action) {
  switch (action.type) {
    case SUPPORTWIICHPLAY:
      return action.supportPlays;
    default:
      return state;
  }
}

function supportGold(state=0, action) {
    switch (action.type) {
      case SUPPORTGOLD :
        return action.gold;
      default:
        return state;
    }
}

const rootApp = combineReducers({
  InfoAState,
  InfoBState,
  supportState,
  bottomShow,
  whichPlay,
  supportWhichPlay,
  supportGold,
});
export default rootApp;

