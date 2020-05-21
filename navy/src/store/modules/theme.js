// 页面布局模块
import types from '../types.js'
import * as theme from '@/assets/theme/theme'
const defaultTheme='blue';
const state = {
  currTheme:'blue',//默认主题色
  asideBg:theme[defaultTheme].primary,
  navTop:theme[defaultTheme].navTop,
  navTopTxt:theme[defaultTheme].navTopTxt
}
const getters = {
  currentTheme:(state)=>{
    return state.currTheme;
  },
  asideBg:(state)=>{
    return state.asideBg;
  },
  navTop:(state)=>{
    return state.navTop;
  },
  navTopTxt:(state)=>{
    return state.navTopTxt;
  }
}
const actions = {
  currTheme({commit}){
    commit(types.CURRTHEME);
  }

}
const mutations = {
  //当前主题色
  [types.CURRTHEME](state, data){
    console.log(data)
    state.currTheme=data;
    //左菜单栏背景色
    state.asideBg=theme[data].primary;
    //顶部菜单背景色
    state.navTop=theme[data].navTop;
    state.navTopTxt=theme[data].navTopTxt;
  }

}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
