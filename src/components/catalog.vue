<template>
  <div class="catalog">
    <router-link 
      :to="{name: 'cart', params: {cartData: CART}}"
    >
      <div class="btn btn--catalog">
        <img src="../assets/images/shopping-cart.svg" alt="">
        <span>{{CART.length}}</span>
      </div>
    </router-link>
    <div class="catalog-list">
      <catalog-item 
        v-for="product in PRODUCTS" 
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
  import CatalogItem from './catalog-item'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'catalog',
    components: {
      CatalogItem
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS()
    }
  }
</script>

<style lang='scss'>
  .catalog-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .btn--catalog {
    position: relative;
    width: 30px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }

    span {
      position: absolute;
      content: '';
      top: -10px;
      right: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #3282b8;
      color: #ffffff;
      font-size: 14px;
    }
  }
</style>