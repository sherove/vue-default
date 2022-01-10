<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="state.num1" @keyup="plusNumbers"/>
            <span>+</span>
            <input type="text" v-model.number="state.num2" @keyup="plusNumbers"/>
            <span>=</span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    name: "CompositionAPI",
    setup() {
        let state = reactive({ // 실시간 데이터 반응 비슷computed
            num1: 0,
            num2: 0,
            result: 0
        });

        function plusNumbers(){
            state.result =state.num1 + state.num2
        }

        return {
            //반드시 return 해줘야만 data, 함수사용
            state,
            plusNumbers
        }
    },
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