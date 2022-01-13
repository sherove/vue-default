import {reactive, computed, toRefs} from 'vue'

const plusCalculator23 = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })

    return toRefs(state);
}

const multiplyCalculator = () => {
    let state = reactive({
        num3: 0,
        num4: 0,
        result2: computed(() => state.num3 * state.num4)
    })

    return toRefs(state);
}

export{
    plusCalculator23,
    multiplyCalculator
}