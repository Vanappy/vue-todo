const state = {
  todos: [{
    id: 1,
    task: 'タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1',
    done: false
  }, {
    id: 2,
    task: 'タスク2',
    done: true
  }, {
    id: 3,
    task: 'タスク3',
    done: false
  }, {
    id: 4,
    task: 'タスク4',
    done: false
  }, {
    id: 5,
    task: 'タスク500',
    done: true
  }]
}

const actions = {
  switchTask({ commit }, { todo }) {
    commit('switchTask', todo.id)
  },

  addTask({ commit }, { input }) {
    commit('addTask', input)
  }
}

const mutations = {
  switchTask(state, id) {
    const task = state.todos.find(todo => todo.id === id);
    task.done = !task.done;
  },

  addTask(state, input) {
    state.todos.push({
      id: state.todos.length + 1,
      task: input,
      done: false
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}