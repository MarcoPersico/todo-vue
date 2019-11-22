<template>
  <button
    v-if="todos.filter(ele => ele.isChecked).length !== 0"
    class="clearTodo"
    @click="clearDone()"
  >
    {{ buttonMessage }}
  </button>
</template>

<script>
import store from '../../../../store/sotre'
import './TodoButton.scss'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    buttonMessage: {
      type: String,
      default: 'Missing Prop'
    }
  },
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
