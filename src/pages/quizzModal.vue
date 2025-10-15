<script setup lang="ts">
import { onMounted } from 'vue';
import ButtonAnswer from '../components/ButtonAnswer.vue';
import QuestionSection from '../components/QuestionSection.vue';
import {useQuizzStore} from '../store/quizzStore.ts'

//https://dribbble.com/shots/24364665-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-UIUX
//https://dribbble.com/shots/24364687-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-Dark

const storeQuizz = useQuizzStore();

onMounted(()=>{
    storeQuizz.addQuestion()
})
</script>

<template>
    <div class=" bg-white p-4 flex flex-col rounded-lg items-center justify-center">

        <div
            class="w-52 h-8 rounded-lg bg-blue-100 border-blue-200 border-2 border-solid flex items-center justify-center text-center self-center">
            <p class="text-black font-[Poppins] ">Sprawdź swoją wiedzę</p>
        </div>
        <h1 class="text-gray-600 text-4xl font-[Poppins] font-semibold mt-8 mb-10">
            Jak dobrze znasz nowelę "Latarnik"?
        </h1>
        <hr class="w-200 h-px my-8 bg-gray-200 border-0 dark:bg-gray-200">
        <QuestionSection :question="storeQuizz.pytanie" />
        <div class="grid grid-cols-1 gap-2 text-gray-600 font-[Poppins] ">
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz1" />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz2" />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz3" />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz4" />
        </div>

    </div>

</template>

<style scoped></style>