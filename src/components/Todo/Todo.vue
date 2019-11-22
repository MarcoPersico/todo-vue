<template>
  <div class="todo">
    <add-todo />
    <list-todo />
    <todo-button button-message="Clear Done" />
    <todo-button button-message="Show Done" />
  </div>
</template>

<script>
import AddTodo from './AddTodoInput/AddTodo.vue'
import ListTodo from './ListTodo/ListTodo.vue'
import TodoButton from './common/TodoButton/TodoButton.vue'

import './Todo.scss'

export default {
  components: {
    AddTodo,
    ListTodo,
    TodoButton
  }
}
</script>
