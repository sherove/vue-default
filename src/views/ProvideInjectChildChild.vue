<template>
   <div>
      Item Length : {{ this.itemLength}}
   </div>
</template>
<script>
   export default {
   name: '',
   components: {},
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
