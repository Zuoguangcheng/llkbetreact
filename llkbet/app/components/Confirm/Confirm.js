import React, {Component} from 'react';
import './Confirm.scss';

export default class Confirm extends Component {
//  判断当前是哪个玩家
  abcd() {
    var play = this.props.supportWhichPlay;
    if(play == "playerA") {
      return this.props.InfoA;
      // return this.props.InfoA.headurl;
    }else {
      return this.props.InfoB;
    }
  }
  onhandleConfirmClick() {
    var name = this.abcd().name;
    var supportGold = this.props.supportGold;
    this.props.pressInfo();
    this.props.supportPlay(0);
    fetch("http://localhost:1234/?name='name'&supportGold='supportGold'"
    ).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (e) {
        alert("Oops, no");
    })

  }
  render() {
    return(
      // <!--确认界面-->
      <div id="confirm" style={{"display" : this.props.bottomShow.confirm}}>
        <div id="confirmInfo">
          <p id="confirmPlay">{this.abcd().name}</p>
          <p id="confirmMoney">压分金额：<span>{this.props.supportGold}</span></p>
        </div>
        <div id="confirmBtn">
          <button onTouchStart={()=>this.props.support()}>取消</button>
          <button onTouchStart={this.onhandleConfirmClick.bind(this)}>确认</button>
        </div>
      </div>
    )
  }
}
