<template>
  <div class="cart">
    <h2>Cart</h2>
    <router-link 
      :to="{name: 'catalog'}"
    >
      <div class="btn btn--cart">
        <span>Back to catalog</span>
      </div>
    </router-link>
    <cart-item 
      v-for="(item, index) in cartData"
      :key="item.article"
      :cartItemData="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <p v-if="!cartData.length">There is no items...</p>
  </div>
</template>

<script>
  import CartItem from './cart-item'
  import { mapActions } from 'vuex'

  export default {
    name: 'cart',
    components: {
      CartItem
    },
    props: {
      cartData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">

</style>