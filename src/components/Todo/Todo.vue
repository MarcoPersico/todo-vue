<template>
  <div class="todo">
    <add-todo />
    <list-todo />
    <clear-todo />
  </div>
</template>

<script>
import AddTodo from './AddTodoInput/AddTodo.vue'
import ListTodo from './ListTodo/ListTodo.vue'
import ClearTodo from './ClearTodo/ClearTodo.vue'

import './Todo.scss'

export default {
  components: {
    AddTodo,
    ListTodo,
    ClearTodo
  }
}
</script>
