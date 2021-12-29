<template>
   <div class="container" :class="{'active': true}" >Class Binding</div>
   <!-- v-bind:class="{'active': isActive === 'Y', 'blue': isBlue}"  -->
   <br>
   <div>
      <!-- v-on:click="increateCounter" 와 @click 같음 @는 이벤트 -->
      <button type="button" @click="increateCounter">Add 1</button>
      <p>The count is {{counter}}</p>
   </div>
   <br>
   <div>
      <button type="button" @click="one(), two()">one two 실행</button>
   </div>
   <br>
   <div>
      <!-- v-if : 조건을 만족하면 그 순간에 html 블럭이 그려짐(생성) 아니면 아예 안그려짐 : 왔다갔따할때 비용많이듬
            v-show : 실제 html <div></div> 는 그려짐 랜더링됨 한번 렌더링되니까 걍 이거 쓰면 좋음 (가벼움) -->
      <h3 v-show="bRender">bRender값이 true이면 h3 블록이 화면에 보여짐 ㅅㄱ</h3>
   </div>
   <br>
   <div>
      <select v-model="city">
         <option :value="data.k" :key="i" v-for="(data,i) in list">{{data.v}}</option>
      </select>
      <table>
         <thead>
            <tr>
               <th>제품명</th>
               <th>제품가격</th>
               <th>배송비</th>
               <th>제품카테고리</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(data, i) in productList" :key="i">
               <td>{{data.product_name}}</td>
               <td>{{data.price}}</td>
               <td>{{data.delivery_price}}</td>
               <td>{{data.category}}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
   export default {
   name: '',
   components: {},
   // # 랜더링 후 한번만 작업 시도   # _id 데이터 계속 감지함.
   computed: {
      // computed-1. 현재사용자 정보
		_user () {
			return this.$store.getters.getUser
		},
		// computed-2. 담보리스트
		_guarantyTypeCodes () {
			return this.$store.getters.getCommonCodes('GuarantyType')
		},
		// computed-3. 지점리스트
		_branches () {
			let branches = this.$store.getters.getBranches
			branches.forEach(item => {
				let deptPathArray = item.deptPathName.split('/').filter(item => item)
				deptPathArray.splice(0, 2)
				item.newDeptName = deptPathArray.join('/')
			})
			return branches
		},
		_auth_roles () {
			return this.$store.getters.getAuthRoles
		},
		_isGuarantyAdmin () {
			return this._auth_roles.indexOf('ROLE_ADMIN') > -1 || this._auth_roles.indexOf('EMP_ADMIN') > -1
		}
   },
   data() {
      return {
         counter: 0,
         bRender: true,
         sampleData: '',
         list: [
            {k: '02', v:'서울'},
            {k: '031', v:'경기'},
            {k: '032', v:'인천'},
         ],
         city: '031',
         productList: [
            {product_name: '기계식 키보드', price: 25000, delivery_price:5000, category: '전자제품'},
            {product_name: '마우스', price: 4000, delivery_price:2500, category: '전자제품'},
            {product_name: '모니터', price: 125000, delivery_price:5000, category: '전자제품'},
         ]
      };
   },
   methods: {
      increateCounter() {
         this.counter = this.counter+1
      },
      one() {
         alert('One')
      },
      two() {
         alert('Two')
      }
   }}
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
