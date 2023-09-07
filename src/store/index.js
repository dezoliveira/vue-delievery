import { createStore } from "vuex";

const apiURL = process.env.VUE_APP_API_URL

export default createStore({
  state: {
    company : [],
    products: [],
    categories : [],
    groups : [],
    productsInBag : [],
    preOrder : []
  },

  mutations: {
    loadCompany(state, company) {
      state.company = company
    },

    loadProducts(state, products) {
      state.products = products
    },

    loadCategories(state, categories) {
      state.categories = categories
    },

    loadGroups(state, groups) {
      state.groups = groups
    },

    addToBag(state, product) {
      state.productsInBag.push(product)
    },

    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag.filter(item => productId != item.Codigo)
      state.productsInBag = updatedBag
    },

    preOrder(state, product) {
      state.preOrder = []
      state.preOrder.push(product)
    }

  },

  actions: {
    async loadCompany({ commit }) {
      const req = await fetch(`${apiURL}/empresa.php?emp=1`)
      const data = await req.json()
      commit('loadCompany', data)
    },

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

    addToBag({ commit }, product) {
      commit('addToBag', product)
    },

    removeFromBag( {commit}, productId) {
      if( confirm('Deseja excluir esse item do carinho ?') ) {
        commit('removeFromBag', productId)
      }
      alert('item excluido do carrinho!')
    },

    preOrder({ commit }, product) {
      commit('preOrder', product)
    }
  },
   
  modules: {

  }
})