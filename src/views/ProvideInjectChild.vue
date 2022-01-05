<template>
   <div>
      <ProvideInjectChildChild :itemLength="itemLength"></ProvideInjectChildChild>
   </div>
</template>
<script>
   import ProvideInjectChildChild from "./ProvideInjectChildChild.vue"
   export default {
   name: '',
   components: {
      ProvideInjectChildChild
   },
   props: {
      itemLength: {
         type: Number,
         default: 0
      }
   },
   data() {
      return {
         sampleData: ''
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
