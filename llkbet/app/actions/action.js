export const AINFO = 'AInfo';
export const BINFO = 'BInfo';
export const SUPPORTA = 'supportA';
export const SUPPORTB = 'supportB';
export const PRESSINFO = 'pressInfo';
export const SUPPORT = 'support';
export const PLAYINFO = 'playInfo';
export const WHICHPLAY = 'whichPlay';
export const CONFIRM = 'confirm';
export const SUPPORTWIICHPLAY = 'supportWhichPlay';
export const SUPPORTGOLD = 'supportGold';

export function playAInfo(playA) {
    return {type : AINFO, playA}
}
export function playBInfo(playB) {
    return {type : BINFO, playB}
}

export function supportA() {
    return {type : SUPPORTA}
}
export function supportB() {
    return {type : SUPPORTB}
}
//下方初始界面
export function pressInfo() {
    return {type : PRESSINFO}
}
//下方支持界面
export function support() {
    return {type : SUPPORT}
}
//下方用户信息
export function playInfo() {
  return {type : PLAYINFO}
}

//确认界面
export function confirm() {
  return {type : CONFIRM}

}

//确定点击哪个玩家的信息
export function whichPlay(playName) {
    return {type:WHICHPLAY, playName}
}

//确定是支持哪个玩家
export function supportWhichPlay(supportPlays) {
    return {type : SUPPORTWIICHPLAY, supportPlays}
}

//定义金钱数
export function supportGold(gold) {
    return {type : SUPPORTGOLD, gold}
}
