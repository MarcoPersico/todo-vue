<template>
  <form
    class="add-todo"
    @submit="(event) => handleSubmit(currentTodo)"
  >
    <input
      v-model="currentTodo"
      type="text"
      placeholder="Add Todo"
      class="add-todo_input"
    >
    <button
      v-if="currentTodo !== ''"
      class="add-todo_button"
      @click="addTodo(currentTodo)"
    >
      Insert
    </button>
  </form>
</template>

<script>
import store from '../../../store/sotre.js'
import './AddTodo.scss'
let counter = 1

export default {
  data: () => {
    return {
      currentTodo: ''
    }
  },
  methods: {
    addTodo: (value, value2) => {
      const todo = {
        name: value,
        id: counter++,
        isChecked: false
      }
      store.commit('setNewTodo', todo)
    },
    handleSubmit: function (value) {
      event.preventDefault()
      this.$data.currentTodo = ''
    }
  }
}
</script>
