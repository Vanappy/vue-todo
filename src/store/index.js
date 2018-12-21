import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import tab from './modules/tab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { todo, tab }
})