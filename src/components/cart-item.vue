<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src=" require('../assets/images/' + cartItemData.image)" alt="">
    </div>
    <div class="cart-item__content">
      <p class="cart-item__name">{{cartItemData.name}}</p>
      <p class="cart-item__price">Price: {{cartItemData.price}}$</p>
      <p class="cart-item__count">Quantity: {{cartItemData.quantity}}</p>
      <button 
        class="cart-item__btn btn"
        @click="deleteFromCart"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cart-item',
    props: {
      cartItemData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {

    },
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 15px 30px;
    margin-bottom: 10px;

    p {
      margin-right: auto;
    }

    &__content {
      display: flex;
      flex-grow: 1;
    }

    &__img {
      img {
        max-width: 50px;
      }
    }

    &__name {
      margin-left: auto;
    }

    &__price {
      margin-left: auto;
    }

    &__btn {
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>