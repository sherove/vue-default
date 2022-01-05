<template>
   <div>
      <!-- <ProvideInjectChildChild :itemLength="itemLength"></ProvideInjectChildChild> -->
      <ProvideInjectChildChild></ProvideInjectChildChild>
   </div>
</template>
<script>
import ProvideInjectChildChild from "./ProvideInjectChildChild.vue"
export default {
   name: '',
   components: {
      ProvideInjectChildChild
   },
   // props: {
   //    itemLength: {
   //       type: Number,
   //       default: 0
   //    }
   // },
}
</script>
<style>
</style>
