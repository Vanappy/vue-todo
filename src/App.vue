<template>
  <div id="app">
    <TaskTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TaskTable from './components/TaskTable'
import 'reset-css'

export default {
  name: 'app',
  components: {
    TaskTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 20px 0;
}
</style>
