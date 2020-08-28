<template>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'main-wrapper',
    data() {
      return {}
    }
  }
</script>

<style>
  .main-wrapper {
    margin: 0 auto;
    padding: 0 10%;
  }
</style>