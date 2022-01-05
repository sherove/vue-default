<template>
   <div>
      <!-- <ProvideInjectChild :itemLength="items.length"></ProvideInjectChild> -->
      <ProvideInjectChild></ProvideInjectChild> <!-- 자식에게 props로 전달 ㄴㄴ -->
   </div>
   <div>부모 : {{items.length}}</diV>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild"

export default {
   name: '',
   components: {
      ProvideInjectChild
   },
   data() {
      return {
         items: ['asb', 'bbb']
      };
   },
   provide() {
      return {
         itemLength: this.items.length,
         items: this.items
      }
   }
}
</script>
<style>
</style>
