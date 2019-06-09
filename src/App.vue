<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './pages/Main.vue'

export default {
  name: 'app',
  components: {
    Main,
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
