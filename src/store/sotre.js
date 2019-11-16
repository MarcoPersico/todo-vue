import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todo: [],
    todoDone: []
  },
  mutations: {
    setNewTodo (state, todo) {
      state.todo = [...state.todo, todo]
    },
    setTodoStatus (state, todo) {
      state.todo.map((ele) => {
        if (ele.id === todo.currentTodo.id) {
          ele.isChecked = todo.status
        }
      })
    },
    clearDone (state) {
      state.todo = state.todo.filter(ele => !ele.isChecked)
      state.todoDone = state.todo.filter(ele => ele.isChecked)
    }
  }
})

export default store
