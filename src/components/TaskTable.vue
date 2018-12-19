<template>
  <ul class="taskTable">
    <li v-for="todo in todos" :key="todo.id" class="taskTable__row">
      <div class="taskTable__cell">
        <p class="taskTable__name" v-bind:class="{ done: todo.done }">{{todo.task}}</p>
      </div>
      <div class="taskTable__cell">
        <button class="taskTable__btn" v-bind:class="{ done: !todo.done }" @click="switchTask(todo)">{{todo.done ? '戻す' : '完了'}}</button>
      </div>
    </li>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'TaskTable',

    computed: {
      ...mapState({
        todos: state => state.todo.todos
      })
    },

    methods: {
      switchTask(todo) {
        this.$store.dispatch('todo/switchTask', {
          todo: todo
        })
      }
    }

    // methods: {
    //   ...mapActions(['switchTask'])
    // }
  }

</script>


<style scoped>
  .taskTable {
    margin: 0 auto;
    border: 3px #aaa solid;
  }

  .taskTable__row {
    display: flex;
  }
  
  .taskTable__row:not(:last-of-type) {
    border-bottom: 2px #aaa solid;
  }

  .taskTable__cell {
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .taskTable__cell:first-child {
    flex: 1;
  }

  .taskTable__cell:not(:last-of-type) {
    border-right: 2px #aaa solid;
  }

  .taskTable__name {
    font-size: 14px;
  }

  .taskTable__name.done {
    text-decoration: line-through;
  }

  .taskTable__btn {
    padding: 5px;
    border-radius: 2px;
    border: 0;
    font-size: 14px;
    text-align: center;
    width: 100px;
    background-color: #888;
    color: #fff;
  }

  .taskTable__btn.done {
    background-color: #f88;
    color: #fff;
  }
</style>