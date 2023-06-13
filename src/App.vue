<template>
  <div id="app">
    <nav v-if="hasLogin">
      <router-link to="/"><svg-icon iconName="home"></svg-icon></router-link> |
      <router-link to="/about"><svg-icon iconName="about"></svg-icon></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['hasLogin'])
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
