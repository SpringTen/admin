<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
import storage from './storage/index'

export default {
  name: 'App',
  components: {
    // axios,
  },
  data() {
    return {
    }
  },
  mounted() {
    // let url = "",
    // storage.setItem('a', 1);
    // storage.setItem('abc', {'a': 1}, 'user');
    // storage.clear('admin')
    storage.clear('c','user')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
