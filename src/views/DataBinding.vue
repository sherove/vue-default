<template>
   <h1>{{sampleData}}</h1>
   <div>{{sampleData}}</div>
</template>
<script>
   export default {
   name: '',
   components: {},
   data() {
      return {
         sampleData: '하이하이'
      };
   },
   setup() {},
   created() {}, // vue 컴포넌트가 생성되는 순간 바로 실행
   mounted() {}, // 템플릿안에 html(template)가 그려지고 나서 바로 mounted 실행
   unmounted() {}, // 다른 페이지로 이동 할때 이 페이지에서 벗어날 때 실행
   methods: {
   }}
</script>
<style>
</style>
