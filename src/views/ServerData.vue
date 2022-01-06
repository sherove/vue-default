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
import axios from 'axios'
export default {
    data() {
        return {
            productList: []
        }
        
    },
    methods: {
        async getProductList() {
            this.productList = await this.methodApi(
                'https://013591bd-e4eb-4581-854c-d9df30d20859.mock.pstmn.io/productList',
                'get',
                {}
            )
            console.log(this.productList)
        }
        ,
        async methodApi(url, method, data) {
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch( e => {
                console.log(e);
            })).data;
        
        }
    }

}
</script>

<style>

</style>