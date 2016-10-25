import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topplays from '../components/Topplays/Topplays';
import Pressinformation from '../components/Pressinformation/Pressinformation';
import Support from '../components/Support/Support';
import PlayInfo from '../components/PlayInfo/PlayInfo';
import Confirm from '../components/Confirm/Confirm';
import {playAInfo, playBInfo, supportA, supportB, pressInfo,support, playInfo, whichPlay, supportWhichPlay, supportGold, confirm} from '../actions/action';


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    var playAInfoObject = {
      headurl: "./img/bb.png",
      name: "Armstrong",
      lv: "LV25",
      rateOfWin: "90%",
      totalGames: "42",
      gamesOfWin: "30",
      winningStreak: "6",
      lastTenGame: [true, false, true, true, true, true, false, true, true, false],
      gold: 1532444,
    };
    var playBInfoObject = {
      headurl: "./img/aa.png",
      name: "Brmstrong",
      lv: "LV30",
      rateOfWin: "80%",
      totalGames: "40",
      gamesOfWin: "30",
      winningStreak: "5",
      lastTenGame: [true, true, true, false, true, true, false, false, true, true],
      gold: 1352475,
    };
    setTimeout(function () {
      dispatch(playAInfo(playAInfoObject));
      dispatch(playBInfo(playBInfoObject))
    }, 1000)
  }

  render() {
    const {dispatch, InfoA, InfoB, supportState, bottomShow, whichPlaya, supportWhichPlaya, supportGoldNum} = this.props;

    return (
      <div>
        <Topplays
          InfoA={InfoA}
          InfoB={InfoB}
          supportState={supportState}
          supportA={()=>dispatch(supportA())}
          supportB={()=>dispatch(supportB())}
          pressInfo={()=>dispatch(pressInfo())}
          support={()=>dispatch(support())}
          playInfo={()=>dispatch(playInfo())}
          supportPlay = {num=>dispatch(supportGold(num))}
          whichPlay={playName=>dispatch(whichPlay(playName))}
          supportWhichPlay={supportPlays=>dispatch(supportWhichPlay(supportPlays))}
        />
        <Pressinformation
          bottomShow={bottomShow}
        />
        <Support
          InfoA={InfoA}
          InfoB={InfoB}
          bottomShow={bottomShow}
          supportWhichPlay={supportWhichPlaya}
          supportGold = {supportGoldNum}
          supportPlay = {num=>dispatch(supportGold(num))}
          confirm = {()=>dispatch(confirm())}
          pressInfo={()=>dispatch(pressInfo())}
        />
        <PlayInfo
          InfoA={InfoA}
          InfoB={InfoB}
          bottomShow={bottomShow}
          whichPlay={whichPlaya}
        />
        <Confirm
          InfoA={InfoA}
          InfoB={InfoB}
          bottomShow={bottomShow}
          supportWhichPlay={supportWhichPlaya}
          supportGold = {supportGoldNum}
          pressInfo={()=>dispatch(pressInfo())}
          support={()=>dispatch(support())}
          supportPlay = {num=>dispatch(supportGold(num))}
        />
      </div>
    )
  }
}

function select(state) {
  return {
    InfoA: state.InfoAState,
    InfoB: state.InfoBState,
    supportState: state.supportState,
    bottomShow :　state.bottomShow,
    whichPlaya : state.whichPlay,
    supportWhichPlaya : state.supportWhichPlay,
    supportGoldNum : state.supportGold,
  }
}

export default connect(select)(App);
