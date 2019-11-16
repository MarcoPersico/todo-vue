<template>
  <button
    v-if="todos.filter(ele => ele.isChecked).length !== 0"
    class="clearTodo"
    @click="clearDone()"
  >
    Clear Done
  </button>
</template>

<script>
import store from '../../../store/sotre'
import './ClearTodo.scss'

export default {
  computed: {
    todos () {
      return store.state.todo
    }
  },
  methods: {
    clearDone: () => {
      store.commit('clearDone')
    }
  }
}
</script>
