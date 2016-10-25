import React, {Component} from "React";
import "./PlayInfo.scss";

export default class PlayInfo extends Component {
//  判断当前是哪个玩家
abcd() {
  var play = this.props.whichPlay;
  if(play == "playerA") {
    return this.props.InfoA;
    // return this.props.InfoA.headurl;
  }else {
    return this.props.InfoB;
  }
}


  render() {
    return(
      <div id="playInfoShow" className="playInfoShow" style={{"display" : this.props.bottomShow.playInfo}}>
        {/*{console.log("aaaa" + this.abcd().headurl)}*/}
        <div id="playShow">
          <div id="playPic">
            {/*{var b = this.abcd().headurl}*/}
            <img src= {(this.abcd().headurl)}/>
          </div>
          {/*<!--信息-->*/}
          <div id="playShowInfo">
            {/*<!--玩家A名字-->*/}
            <p id="playShowName">{this.abcd().name}</p>
            <div id="playShowinfoLV">

              <p id="playShowGrade">{this.abcd().lv}</p>

              <p id="playShowrateofWin">{this.abcd().rateOfWin}</p>
            </div>

          </div>
        </div>

        <div id="CompetitionInfo">
          <div>
            <div id="matchSum" className="competionInfo">
              <span>总局数</span>
              <span>{this.abcd().totalGames}</span>
            </div>
            <div id="rateOfWin" className="competionInfo">
              <span>胜率</span>
              <span>{this.abcd().rateOfWin}</span>
            </div>
          </div>
          <div>
            <div id="totleOfWin" className="competionInfo">
              <span>胜利场数</span>
              <span>{this.abcd().gamesOfWin}</span>
            </div>
            <div id="winOfStreak" className="competionInfo">
              <span>连胜</span>
              <span>{this.abcd().winningStreak}</span>
            </div>
          </div>
        </div>

        <div id="giveGifts">
          <img src={require("./img/sonliwu.png")} alt="" />
        </div>

        <div id="lastTenMatch">
          <p>最近10场比赛</p>
          <div id="lastTenMatchShow">
          {/*<span class="matchShow">胜</span>*/}

          </div>
        </div>
      </div>
    )
  }
}
