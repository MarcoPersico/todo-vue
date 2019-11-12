<template>
  <div>
    <ul>
      <li><input type="checkbox">Learn to build Vue Project</li>
      <li><input type="checkbox">Make a simple todo using vue</li>
      <button @click="showState('some new value')" />
    </ul>
  </div>
</template>

<script>
import store from '../../../store/sotre.js'

export default {
  methods: {
    showState: (value) => {
      store.setTestMessage(value)
      console.log(store.state.test)
    }
  }
}
</script>
