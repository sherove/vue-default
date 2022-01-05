<template>
   <modal-layout>
      <template v-slot:header>
         <h1>팝업 타이틀</h1>
      </template>

      <template v-slot:footer>
         <button type="button">닫기</button>
      </template>
            <template v-slot:default>
         <p>팝업 컨텐츠a</p>
         <p>팝업 컨텐츠b</p>
      </template>
   </modal-layout>
</template>
<script>
import SlotModalLayout from "./SlotModalLayout.vue"
export default {
   components: {
      "modal-layout": SlotModalLayout
   }
}
</script>
