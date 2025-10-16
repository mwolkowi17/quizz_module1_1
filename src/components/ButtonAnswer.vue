<script setup lang="ts">
import { nextTick,ref } from 'vue';
import { useQuizzStore } from '../store/quizzStore';


const storeQuizz = useQuizzStore();


const props = defineProps(['odpowiedz','nrPrzycisku'])

const ifPrawidlowaLocal = ref(false)
const colorOfButton = ref("")

async function  buttonClick(){
    if(!storeQuizz.ifZablokowanaOdpowiedz){
    storeQuizz.checkAnswer(props.nrPrzycisku)
    await nextTick()
    ifPrawidlowaLocal.value=storeQuizz.ifPrawidlowaOdpowiedz
    await nextTick()
    if(ifPrawidlowaLocal.value){
     colorOfButton.value="#86efac"
    }else{
     colorOfButton.value="#fca5a5"
    }
    await nextTick()
    storeQuizz.ifPrawidlowaOdpowiedz=false
    storeQuizz.ifZablokowanaOdpowiedz=true
    setTimeout(()=>{
        colorOfButton.value=""
        storeQuizz.addQuestion()
    },2000)

}
}
</script>
<template>
    <button
        class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid"
        v-html="props.odpowiedz"
        @click="buttonClick"
        :style="{backgroundColor:colorOfButton}">
    </button>
</template>
<style scoped></style>