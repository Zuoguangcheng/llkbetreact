import React, {Component} from 'react';
import "./Topplays.scss";

export default class Topplays extends Component {
  onhandleAClick() {
    this.props.supportA();
    this.props.support();
    this.props.supportWhichPlay("playerA");
    this.props.supportPlay(0);
  }
  onhandleBClick() {
    this.props.supportB();
    this.props.support();
    this.props.supportWhichPlay("playerB");
    this.props.supportPlay(0);
  }
  onhandleplayerHeadAClick() {
    // console.log(1);
    this.props.playInfo();
    this.props.whichPlay("playerA");
  }
  onhandleplayerHeadBClick() {
    // console.log(2);
    this.props.playInfo();
    this.props.whichPlay("playerB");
  }

  render() {
    return (

      <div id="contentWrap" className="contentWrap">

        {/*<!--quizPlayers 上方参赛选手、分数条-->*/}
        <div id="quizPlayersAndScore" className="quizPlayersAndScore">
          {/*<!--分数条-->*/}
          <div id="score" className="score">
            {/*<!--分数条上方的名字和金币数-->*/}
            <div id="playName">
              <div id="playA">
                <p id="playAName">{this.props.InfoA.name}</p>
                <p id="playAScore">1230000</p>
              </div>
              <div id="playB">
                <p id="playBName">{this.props.InfoB.name}</p>
                <p id="playBScore">1230000</p>
              </div>
            </div>
            <div id="scoreA"></div>
            <div id="scoreB"></div>
          </div>

          {/*<!--参赛选手-->*/}
          <div id="quizPlayers" className="quizPlayers">
            <div id="quizPlayersA">
              {/*<!--头像-->*/}
              <div id="playersHeadA" className="playersHeadA" onTouchStart={this.onhandleplayerHeadAClick.bind(this)}>
                {/*对勾*/}
                <div style={{"display" : this.props.supportState[0]}}></div>
                {/*头像*/}
                <div></div>
              </div>

              {/*<!--信息-->*/}
              <div id="playAinfo">
                {/*<!--玩家A名字-->*/}
                <p id="playersAName">{this.props.InfoA.name}</p>
                <div id="playAinfoLV">
                  {/*<!--玩家A等级-->*/}
                  <p id="playersAGrade">{this.props.InfoA.lv}</p>
                  {/*<!--玩家A胜率-->*/}
                  <p id="playersArateofWin">{this.props.InfoA.rateOfWin}</p>
                </div>
                {/*<!--支持A玩家-->*/}
                {/*<div id="supportA" onClick={()=>this.props.supportA()}>支持</div>*/}
                <div id="supportA" onTouchStart={this.onhandleAClick.bind(this)}>支持</div>
              </div>
            </div>
            <div id="quizPlayersB">
              {/*<!--头像-->*/}
              <div id="playersHeadB" className="playersHeadB" onTouchStart={this.onhandleplayerHeadBClick.bind(this)}>
                {/*对勾*/}
                <div style={{"display" : this.props.supportState[1]}}></div>
                {/*头像*/}
                <div></div>
              </div>
              {/*<!--信息-->*/}
              <div id="playBinfo">
                {/*<!--玩家B名字-->*/}
                <p id="playersBName">{this.props.InfoB.name}</p>
                <div id="playBinfoLV">
                  {/*<!--玩家B等级-->*/}
                  <p id="playersBGrade">{this.props.InfoB.lv}</p>
                  {/*<!--玩家B胜率-->*/}
                  <p id="playersBrateofWin">{this.props.InfoB.rateOfWin}</p>
                </div>
                {/*<!--支持B玩家-->*/}
                {/*<div id="supportB" onClick={()=>this.props.supportB()}>支持</div>*/}
                <div id="supportB" onTouchStart={this.onhandleBClick.bind(this)}>支持</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
