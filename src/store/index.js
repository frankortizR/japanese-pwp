import { createStore } from 'vuex'

export default createStore({
  state: {
    muted: false,
    hidenRomaji: false,
  },
  mutations: {
    muteSound(state){
      state.muted = !state.muted;
    },
    storeHideRomaji(state){
      state.hidenRomaji = !state.hidenRomaji;
    }
  },
  actions: {
  },
  modules: {
  }
})
