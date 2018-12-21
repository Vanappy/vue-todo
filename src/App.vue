<template>
  <div id="app">
    <Input />
    <SearchTab/>
    <TaskTable/>
  </div>
</template>

<script>
  import SearchTab from './components/SearchTab'
  import TaskTable from './components/TaskTable'
  import Input from './components/Input'
  import 'reset-css'

  export default {
    name: 'app',
    components: {
      Input,
      SearchTab,
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
