<template>
  <div id="app">
    <el-button type="primary">hello qianlan</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
import '@/assets/index'
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
