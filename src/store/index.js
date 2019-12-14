import Vue from 'vue'
import Vuex from 'vuex'
import Contenful from '../content';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentful: null
  },
  mutations: {
    setData(state, data){
      state.contentful = data.items;
    }
  },
  actions: {
    async fetchData(ctx){
     
     ctx.commit('setData', await Contenful.getEntries({
        'content_type': 'blogg',
        order: '-sys.createdAt'
      }) );
    }
  },
  modules: {
  }
})
