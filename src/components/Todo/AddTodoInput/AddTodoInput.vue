<template>
  <div class="todo_input">
    <input
      v-model="currentTodo"
      type="text"
      placeholder="Add Todo"
    >
    <button @click="addTodo(currentTodo)">
      Add Todo
    </button>
  </div>
</template>

<script>
import store from '../../../store/sotre.js'

export default {
  data: () => {
    return {
      currentTodo: ''
    }
  },
  computed: {
    message () {
      return store.state.count
    }
  },
  methods: {
    addTodo: () => {
      store.commit('setNewTodo')
    }
  }
}
</script>
