<template>
  <div class="wrapper">
    <input class="textField js-text" type="text" placeholder="タスクを入力してください"/>
    <button class="btn" @click="addTask({ input: 'aaa' })">追加</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Input',

    methods: {
      addTask: function() {
        const dom = document.querySelector('.js-text')
        const text = dom.value
        this.$store.dispatch('todo/addTask', { input: text })
          .then(() => {
            dom.value = ''
          })
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    margin-bottom: 20px;
  }

  .textField {
    margin-right: 20px;
    width: 400px;
    height: 30px;
    padding-left: 10px;
  }

  .btn {
    width: 80px;
    height: 40px;
    border: 0;
    background-color: #d88;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
</style>