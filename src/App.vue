<template>
  <div id="app">
    <nav>
      <router-link to="/"><svg-icon iconName="home"></svg-icon></router-link> |
      <router-link to="/about"><svg-icon iconName="about"></svg-icon></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
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
