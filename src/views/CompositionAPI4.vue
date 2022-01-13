<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1"/>
            <span>+</span>
            <input type="text" v-model.number="num2"/> <!--  -->
            <span>=</span>
            <span>{{result}}</span>
        </div>
        <br>
        <div>
            <input type="text" v-model.number="num3"/>
            <span>+</span>
            <input type="text" v-model.number="num4"/> <!--  -->
            <span>=</span>
            <span>{{result2}}</span>
        </div>
    </div>
</template>

<script>
import {plusCalculator23, multiplyCalculator} from '../common.js'
export default {
    name: "CompositionAPI",
    // set up 사용
    setup() {
        let {num1, num2, result} = plusCalculator23();

        let {num3, num4, result2} = multiplyCalculator();

        return {
            num1, num2, result, num3, num4, result2
        }
    }

}
</script>

<style>

</style>