<template>
   <div>
      Item Length : {{ this.itemLength }} <br>
      <!-- Items: {{ this.items.length }} -->
   </div>
</template>
<script>
export default {
   name: '',
   components: {},
   // props: {
   //    itemLength: {
   //       type: Number,
   //       default: 0
   //    }
   // },
   inject: ["itemLength", "items"] //provide에 키값을 [key] 배열형태로 넣어줌
}
</script>
<style>
</style>
