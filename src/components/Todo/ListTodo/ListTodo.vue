<template>
  <div class="list-todos">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="list-todos_todo"
    >
      <label>
        <input
          type="checkbox"
          @click="(event) => toggleTodo(todo, event)"
        >
        {{ todo.name }}
      </label>
    </div>
  </div>
</template>

<script>
import store from '../../../store/sotre.js'
import './ListTodo.scss'

export default {
  computed: {
    todos () {
      return store.state.todo
    }
  },
  methods: {
    toggleTodo: (todo, event) => {
      if (event.target.checked) {
        event.target.parentElement.className = 'done'
      } else {
        event.target.parentElement.className = ''
      }
      store.commit(
        'setTodoStatus', {
          currentTodo: todo,
          status: event.target.checked
        })
    }
  }
}
</script>
