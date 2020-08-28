import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex)

let store = new Vuex.Store({
  // Состояние, объекты, массивы и т.д.
  state: {
    products: [],
    cart: []
  },
  // Изменение данных, мутации синхронны 
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_TO_CART: (state, product) => {
      let isItemExist = false

      state.cart.map(item => {
        if (item.article === product.article) {
          isItemExist = true
          item.quantity++
        }
      })
      isItemExist || state.cart.push(product)
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  }, 
  // Действия, асинхронны
  actions: {
    GET_PRODUCTS({commit}) {
      return Axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_TO_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  }, 
  // Получение инфы из стейта (короткий путь)
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  } 
})

export default store