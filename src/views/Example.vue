<template>
   <div>
      <input type="text" v-model="valueModel"/>
      <input type="number" v-model.number="valueModel2"/>
      <textarea v-model="valueModel3"></textarea>
      <div>{{valueModel3}}</div>
      <select v-model="city">
         <option value="02">서울</option>
         <option value="031">경기</option>
         <option value="032">인천</option>
      </select>
      <br>
      <label><input type="checkbox" value="서울" v-model="checked">서울</label>
      <label><input type="checkbox" value="부산" v-model="checked">부산</label>
      <label><input type="checkbox" value="제주" v-model="checked">제주</label>
      <br>
      <span>체크한 지역 : {{checked}}</span>
      <br>
      <!-- <br>
      <label><input type="radio" v-bind:value="radio1" v-model="picked"/>서울</label>
      <label><input type="radio" v-bind:value="radio2" v-model="picked"/>부산</label>
      <label><input type="radio" v-bind:value="radio3" v-model="picked"/>제주</label>
      <br> -->
      <br>
      <label><input type="radio" v-bind:value="radio[0]" v-model="picked"/>JAVA</label>
      <label><input type="radio" v-bind:value="radio[1]" v-model="picked"/>C언어</label>
      <label><input type="radio" v-bind:value="radio[2]" v-model="picked"/>클라우드컴퓨팅</label>
      <br>
      <span> 선택한 과목 : {{picked}}</span>
   </div>
</template>
<script>
   export default {
   name: '',
   components: {},
   data() {
      return {
         valueModel: '히히',
         valueModel2: '2022',
         valueModel3: '안녕하세요bb',
         city: '032',
         checked: [],
         picked: '',
         radio1: "서울ㅠ",
         radio2: "부산ㅠ",
         radio3: "제주ㅠ",
         radio: ["JAVA", "C언어", "클라우드컴퓨팅"]
      };
   },
   setup() {},
   created() {},
   mounted() {
      console.log(this.valueModel2)
   },
   unmounted() {},
   methods: {
   }}
</script>
<style>
</style>
