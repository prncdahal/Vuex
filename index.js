Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
})

new Vue({
  el: '#app',
  store,
  computed: {
    count() {
      return this.$store.state.count
    },
  },
})
