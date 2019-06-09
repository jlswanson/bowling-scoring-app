<template>
  <div id="app">
    <Welcome />
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome,
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
