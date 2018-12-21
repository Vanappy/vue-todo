<template>
  <div class="searchTab">
    <button class="searchTab__tab searchTab__tab--all" v-bind:class="{ 'is-disabled': !chooseAll }" @click="switchTab({selected: 'all'})">全て</button>
    <button class="searchTab__tab searchTab__tab--yet" v-bind:class="{ 'is-disabled': !chooseYet }" @click="switchTab({selected: 'yet'})">未完了</button>
    <button class="searchTab__tab searchTab__tab--done" v-bind:class="{ 'is-disabled': !chooseDone }" @click="switchTab({selected: 'done'})">完了済</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SearchTab',

    computed: {
      ...mapState({
        chooseAll: state => state.tab.selected === 'all',
        chooseYet: state => state.tab.selected === 'yet',
        chooseDone: state => state.tab.selected === 'done'
      })
    },

    methods: {
      ...mapActions('tab', ['switchTab'])
    }
  }
</script>

<style scoped>
  .searchTab {
    display: flex;
    margin-bottom: 20px;
    text-align: center;
  }

  .searchTab__tab {
    width: 60px;
    height: 40px;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
  }

  .searchTab__tab.is-disabled {
    background-color: #888;
    color: #fff;
  }

  .searchTab__tab--all {
    background-color: #88f;
    color: #fff;
  }

  .searchTab__tab--yet {
    background-color: #f88;
    color: #fff;
  }

  .searchTab__tab--done {
    background-color: #6d6;
    color: #fff;
  }

  .searchTab__tab:not(:last-of-type) {
    margin-right: 20px;
  }
</style>