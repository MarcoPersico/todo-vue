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
    <p>{{ todo }}</p>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      message: ''
    }
  },
  methods: {
    addTodo: (message) => {
      console.log(message)
    }
  }
}
</script>
