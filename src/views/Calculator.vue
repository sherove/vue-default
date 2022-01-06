<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1" @keyup="plusNumbers"/>
            <span>+</span>
            <input type="text" v-model.number="num2" @keyup="plusNumbers"/>
            <span>=</span>
            <span>{{result}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            num1: 0,
            num2: 0,
            result: 0
        }
        
    },
    created() {
        console.log('컴포넌트 생성')
    },
    mounted() {
        console.log('컴포넌트 마운트')
    },
    methods: {
        plusNumbers() {
            this.result = this.num1 + this.num2
        }
    }

}
</script>

<style>

</style>