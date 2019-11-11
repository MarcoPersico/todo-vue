<template>
  <div>
    <add-todo-input />
    <list-todo />
  </div>
</template>

<script>
import AddTodoInput from './AddTodoInput/AddTodoInput.vue'
import ListTodo from './ListTodo/ListTodo.vue'

// eslint-disable-next-line no-unused-vars
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  }
}

export default {
  components: {
    AddTodoInput,
    ListTodo
  }
}
</script>
