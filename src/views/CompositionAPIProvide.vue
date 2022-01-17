<template>
    <CompostionAPIInject />
</template>
<script>
import CompostionAPIInject from "./CompositionAPIInject.vue"
import {provide} from 'vue'
export default {
    components: {
        CompostionAPIInject
    },
    setup() {
        provide('title', 'VueJs프로젝트')
    }
}
</script>