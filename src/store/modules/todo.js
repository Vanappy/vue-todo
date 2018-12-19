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
  switchTask({commit}, { todo }) {
    commit('switchTask', todo.id)
  }
}

const mutations = {
  switchTask(state, id) {
    const task = state.todos.find(todo => todo.id === id);
    task.done = !task.done;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}