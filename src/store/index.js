import { createStore } from "vuex";

const apiURL = process.env.VUE_APP_API_URL

export default createStore({
  state: {
    products: [],
    categories : [],
    groups : []
  },

  mutations: {
    loadProducts(state, products) {
      console.log(products)
      state.products = products
    },

    loadCategories(state, categories) {
      console.log(categories)
      state.categories = categories
    },

    loadGroups(state, groups) {
      state.groups = groups
    }
  },

  actions: {
    async loadProducts({ commit }) {
      const req = await fetch(`${apiURL}/mercadorias.php?emp=1`)
      const data = await req.json()
      commit('loadProducts', data)
    },

    async loadCategories({ commit }) {
      const req = await fetch(`${apiURL}/categorias.php?emp=1`)
      const data = await req.json()
      commit('loadCategories', data)
    },

    async loadGroups({ commit }) {
      const req = await fetch(`${apiURL}/grupos.php?emp=1`)
      const data = await req.json()
      commit('loadGroups', data)
    },
  },
   
  modules: {

  }
})