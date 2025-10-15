<script setup lang="ts">
import { useQuizzStore } from '../store/quizzStore';

const storeQuizz = useQuizzStore();

const props = defineProps(['odpowiedz','nrPrzycisku','backgroundColor'])
</script>
<template>
    <button
        class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid"
        v-html="props.odpowiedz"
        @click="storeQuizz.checkAnswer(props.nrPrzycisku)"
        :style="{backgroundColor:props.backgroundColor}">
    </button>
</template>
<style scoped></style>