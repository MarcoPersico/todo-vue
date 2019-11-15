<template>
  <div>
    <ul>
      <li>
        <input type="checkbox">
        Learn to build Vue Project
      </li>
      <li>
        <input type="checkbox">
        Make a simple todo using vue
      </li>
      <button @click="addTodo()">
        Holi
      </button>
    </ul>
  </div>
</template>

<script>
import store from '../../../store/sotre.js'

export default {
  methods: {
    addTodo: () => {
      store.commit('increment')
    }
  }
}
</script>
