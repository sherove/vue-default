<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
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
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.delivery_price}}</td>
                <td>{{product.category}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ApiMixin from '../api.js'
export default {
    name: "",
    mixins: [ApiMixin],
    data() {
        return {
            productList: []
        }
        
    },
    created() {
        console.log('컴포넌트 생성')
    },
    mounted() {
        console.log('컴포넌트 마운트')
    },
    methods: {
        async getProductList() {
            this.productList = await this.$api(
                'https://013591bd-e4eb-4581-854c-d9df30d20859.mock.pstmn.io/productList',
                'get',
                {}
            )
            console.log(this.productList)
        }
    }

}
</script>

<style>

</style>