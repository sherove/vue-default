<template>
   <div>
      <select v-model="selectedCity">
         <option v-for="(data, i) in cityList" :key="i" :value="data.code">{{data.name}}</option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList"/>
      <button type="button" @click="searchUserList">조회</button>
   </div>
   <div>
      <table>
         <thead>
            <tr>
               <th>이름</th>
               <th>나이</th>
               <th>직업</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(data, i) in userList" :key="i">
               <th>{{data.name}}</th>
               <th>{{data.age}}</th>
               <th>{{data.job}}</th>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
   export default {
   name: '',
   components: {},
   data() {
      return {
         cityList: [
            {
               name: '서울', code: '02'
            },
            {
               name: '경기', code: '031'
            },
            {
               name: '부산', code: '051'
            },
         ],
         selectedCity: '',
         userName: '',
         userList: []
      };
   },
   setup() {},
   created() {},
   mounted() {},
   unmounted() {},
   methods: {
      searchUserList() {
         // const selectedCity = this.selectedCity
         // const userName = this.userName
         const params = {
            selectedCity: this.selectedCity,
            userName: this.userName
         }
         this.userList = this.getUserList(params)
      },
      getUserList(params) {
         console.log(params)

         let list = [
            {name: '유재석', age: 50, job:'연예인'},
            {name: '하하', age: 40, job:'가수'},
            {name: '김종국', age: 40, job:'가수'},
            {name: '송종국', age: 25, job:'배우'},
         ]

         return list;
      }
   }}
</script>
<style>
</style>
