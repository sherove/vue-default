<template>
   <div>
      <img v-bind:src="url" style="height:200px;width:auto;">
      <input type="text" v-model="textValue"/>
      <button type="button" v-bind:disabled="textValue===''">Click</button>
   </div>
</template>
<script>
   export default {
   name: '',
   components: {},
   data() {
      return {
         url: 'https://kr.vuejs.org/images/logo.png',
         textValue: ''
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
