<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1"/>
            <span>+</span>
            <input type="text" v-model.number="num2"/> <!--  -->
            <span>=</span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>

<script>
import {reactive, computed} from 'vue'
export default {
    name: "CompositionAPI",
    // set up 사용
    setup() {
        let state = reactive({ // 실시간 데이터 반응 비슷computed
            num1: 0,
            num2: 0,
            result: computed(() => state.num1 + state.num2) // computed 으로 데이터 실시간 감시. 이벤트X로 진행되지않음.. plusNumbers 여기에 정의
        });


        return {
            //반드시 return 해줘야만 data, 함수사용
            state,
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