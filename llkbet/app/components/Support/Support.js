import React, {Component} from 'react';
import "./Support.scss";
export default class Support extends Component {
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

  onhandlechip(e) {
    var current = e.target;
    var gold = 0;
    if(current.nodeName.toLowerCase() == "img") {
      gold = current.nextSibling.nextSibling.innerHTML;
    }else if(current.nodeName.toLowerCase() == "p") {
      if(current.innerHTML == "筹码") {
          gold = current.nextSibling.innerHTML;
      }else {
          gold = current.innerHTML;
      }
    }
    var currentGold = this.props.supportGold;
    if(gold != 0) {
      var goldNum = gold.split(",").join("");
    }else {
      goldNum = 0;
    }
    var nextGold = Number(currentGold) + Number(goldNum);
    this.props.supportPlay(nextGold);
    // console.log("currentGold" + currentGold + "goldNum" + goldNum + "nextGold" + nextGold);
  }



  render() {
    return(
      <div id="bet" style={{"display" : this.props.bottomShow.support}}>
        <div id="supportplay">
          <p>支持<span>{this.abcd().name}</span></p>
        </div>
        <div id="myGold">
          <p>我的金币：<span>{this.abcd().gold}</span></p>
          <a href="#">充值</a>
        </div>
        <div id="chip" onTouchStart={this.onhandlechip.bind(this)}>
          <div id="chipTop">
            <div className="chipEvery">
              <img src={require("./img/icon_01@2x.png")} alt="" />
              <p>筹码</p>
              <p>1,000</p>
            </div>
            <div className="chipEvery">
              <img src={require("./img/icon_02@2x.png")} alt="" />
              <p>筹码</p>
              <p>10,000</p>
            </div>
            <div className="chipEvery">
              <img src={require("./img/iccon_03@2x.png")} alt="" />
              <p>筹码</p>
              <p>100,000</p>
            </div>
          </div>
          <div id="chipBottom">
            <div className="chipEvery">
              <img src={require("./img/icon_04@2x.png")} />
              <p>筹码</p>
              <p>1,000,000</p>
            </div>
            <div className="chipEvery">
              <img src={require("./img/icon_05@2x.png")} />
              <p>筹码</p>
              <p>10,000,000</p>
            </div>
            <div className="chipEvery">
              <img src={require("./img/icon_06@2x.png")} />
              <p>筹码</p>
              <p>100,000,000</p>
            </div>
          </div>
        </div>
        <div id="explain">
          <div id="betMoney" className="betMoney money">押金币：<span>{this.props.supportGold}</span></div>
          <div id="getMoney" className="getMoney money">可获取金币：<span>{this.props.supportGold}</span></div>
          <div id="confirmAndcancel">
            <button onTouchStart={()=>this.props.confirm()}>确认</button>
            <button onTouchStart={()=>this.props.pressInfo()}>取消</button>
          </div>
        </div>
      </div>
    )
  }

}
