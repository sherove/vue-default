<template>
   <div>
      <ProvideInjectChild :itemLength="items.length"></ProvideInjectChild>
   </div>
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
   setup() {},
   created() {},
   mounted() {},
   unmounted() {},
   methods: {
   }}
</script>
<style>
</style>
