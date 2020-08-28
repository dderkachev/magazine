<template>
  <div class="catalog-item">
    <div class="catalog-item__img">
      <img :src=" require('../assets/images/' + productData.image)" alt="">
    </div>
    <div class="catalog-item__content">
      <p class="catalog-item__name">{{productData.name}}</p>
      <p class="catalog-item__price">Price: {{productData.price}}$</p>
      <button 
        class="catalog-item__btn btn"
        @click="addToCart"
      >
        Add to card
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'catalog-item',
    props: {
      productData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.productData)
      }
    },
    mounted() {
      this.$set(this.productData, 'quantity', 1)
    }
  }
</script>

<style lang='scss'>
  .catalog-item {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin: 10px;
    padding: 15px 20px;
    border-radius: 5px;

    &__img {
      img {
        width: 100px;
      }
    }

    &__btn {
      padding: 10px 20px;
      background-color: #3282b8;
      border-radius: 2px;
      border: 0;
      color: #ffffff;
      cursor: pointer;
    }
  }
</style>