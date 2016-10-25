import React, {Component} from 'react';
import "./Pressinformation.scss";

export default class Pressinformation extends Component {

  render() {
    return(
      //下方展示押分实时信息
      <div id="realTimeGradeInfo" className="realTimeGradeInfo" style={{"display" : this.props.bottomShow.PressInfo}}>

        <p id="gradeWord">实时押分信息</p>
        <div id="gradInfoWrap">
          <div id="playAGradeInfo">
            <p id="playAgolds">1230000</p>
            <p id="playApeople">1020</p>
            <p id="playAreturnRate">1.1</p>
          </div>
          <div id="infoWord">
            <p>总押分金币数</p>
            <p>押分人数</p>
            <p>收益率</p>
          </div>
          <div id="playBGradeInfo">
            <p id="playBgolds">5230000</p>
            <p id="playBpeople">2000</p>
            <p id="playBreturnRate">10.1</p>
          </div>
        </div>
      </div>
    )
  }


}
