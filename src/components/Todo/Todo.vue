<template>
  <div>
    <add-todo-input />
    <list-todo />
  </div>
</template>

<script>
import AddTodoInput from './AddTodoInput/AddTodoInput.vue'
import ListTodo from './ListTodo/ListTodo.vue'

export default {
  components: {
    AddTodoInput,
    ListTodo
  }
}
</script>
