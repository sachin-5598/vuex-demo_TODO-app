import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: '',
    title: 'Learning vuex...!!!',
    todos: [{
      title: 'Learn vue.js',
      done: false,
    }, {
      title: 'Learn vuex',
      done: false,
    }],
  },
  mutations: {
    setNewTodo(state, value) {
      state.newTodo = value;
    },
    addTodo(state) {
      state.todos.push({
        title: state.newTodo,
        done: false,
      });
    },
    setTodoDone(state, index) {
      state.todos[index].done = true;
    },
    setTodoNotDone(state, index) {
      state.todos[index].done = false;
    },
    alldone(state) {
      state.todos.forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        todo.done = true;
      });
    },
  },
  actions: {
    // we cann't call multiple mutations all once directly, so we use
    // actions to do call the mutations logically
    addTodo(context) {
      context.commit('addTodo');
      context.commit('setNewTodo', '');
    },
    toggleTodoDone(context, index) {
      const todo = context.state.todos[index];
      if (todo.done) {
        context.commit('setTodoNotDone', index);
      } else {
        context.commit('setTodoDone', index);
      }
    },
  },
  modules: {
  },
});
