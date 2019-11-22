<template>
  <button
    v-if="todosDone.length !== 0"
    class="clearTodo"
    @click="clearDone()"
  >
    Show Done
  </button>
</template>

<script>
import store from '../../../store/sotre'

export default {
  computed: {
    todosDone () {
      return store.state.todoDone
    }
  },
  methods: {
    clearDone: () => {
      store.commit('clearDone')
    }
  }
}
</script>
