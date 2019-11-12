<template>
  <div class="todo_input">
    <input
      v-model="message"
      type="text"
      placeholder="Add Todo"
    >
    <button @click="addTodo(message)">
      Add Todo
    </button>
    <p>{{ state }}</p>
  </div>
</template>

<script>
import store from '../../../store/sotre.js'

export default {
  data: () => {
    return {
      message: '',
      state: store.state.test
    }
  },
  methods: {
    addTodo: (message) => {
      console.log(message)
    }
  }
}
</script>
