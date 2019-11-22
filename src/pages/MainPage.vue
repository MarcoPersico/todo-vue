<template>
  <div class="main-page">
    <div class="main-page_nav" />
    <todo />
  </div>
</template>

<script>
import Todo from '../components/Todo/Todo.vue'
import './MainPage.scss'

export default {
  components: {
    Todo
  },
  data () {
    return {
      buttonLabels: 'clear'
    }
  }
}
</script>
