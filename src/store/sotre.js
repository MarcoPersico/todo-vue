import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todo: ''
  },
  mutations: {
    setNewTodo (state) {
      state.count++
    }
  }
})

export default store
