
const state = {
    count:100,
    name:'123'
}
const getters = {
    count:(state)=>{
        return state.count;
    },
    name:(state)=>{
        return state.name
    }
   
}
const actions = {
    getCount({ commit, state},data) {
            commit('CHENXUAN',data);
        },
    getName({commit,state}){
        commit('GETNAME')
    }      
}
const mutations = {
    CHENXUAN(state,data){
        state.count=data
    },
    GETNAME(state){
        state.name=state.count+"hehe"
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
