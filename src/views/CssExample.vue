<template>
   <div class="container" v-bind:class="{'active': isActive === 'Y', 'blue': isBlue}">Class Binding</div>
</template>
<script>
   export default {
   name: '',
   components: {},
   data() {
      return {
         isActive: 'N',
         isBlue : true
      };
   }
   
   }
</script>
<style>
   .container {
      width: 100%;
      height: 200px;
   }

   .active {
      background-color: beige;
      font-weight: bold;
   }

   .blue {
      color: rgba(37, 47, 197, 0.63);
   }
</style>
