<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import ButtonAnswer from '../components/ButtonAnswer.vue';
import QuestionSection from '../components/QuestionSection.vue';
import { useQuizzStore } from '../store/quizzStore.ts'
import { metodyPomocnicze } from '../lib/metodyPomocnicze.ts';

//https://dribbble.com/shots/24364665-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-UIUX
//https://dribbble.com/shots/24364687-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-Dark

const storeQuizz = useQuizzStore();


//nr zestay pytań
const nrZetawuPytanScena1 = ref(0)

onMounted(async () => {
    await nextTick()
    nrZetawuPytanScena1.value = metodyPomocnicze.wybierzZestawPytan();
    await nextTick()
    if (nrZetawuPytanScena1.value === 1) {
        storeQuizz.kolekcjaPytan = storeQuizz.kolekcjaPytanB
    }
    if (nrZetawuPytanScena1.value === 2) {
        storeQuizz.kolekcjaPytan = storeQuizz.kolekcjaPytanC
    }
    await nextTick()
    storeQuizz.addQuestion()
})
</script>

<template>
    <div class=" bg-white p-4 flex flex-col rounded-lg items-center justify-center">

        <div
            class="w-52 h-8 rounded-lg bg-blue-100 border-blue-200 border-2 border-solid flex items-center justify-center text-center self-center">
            <p class="text-black font-[Poppins] ">Check your knowlege</p>
        </div>
        <h1 class="text-gray-600 text-4xl font-[Poppins] font-semibold mt-8 mb-4">
            How well do you know javascript??
        </h1>
        <p class="text-gray-600 text-2xl font-[Poppins] font-semibold mt-2 mb-4">good answers: {{ storeQuizz.iloscPoprawnychOdpowiedzi }}</p>
        <hr class="w-200 h-px my-8 bg-gray-200 border-0 dark:bg-gray-200">
        <QuestionSection v-if="storeQuizz.ifPytanie" :question="storeQuizz.pytanie" />
        <div class="grid grid-cols-1 gap-2 text-gray-600 font-[Poppins] " >
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz1" :nr-przycisku="1"
            v-if="storeQuizz.ifOdpowiedz"
                />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz2" :nr-przycisku="2"
            v-if="storeQuizz.ifOdpowiedz"
                 />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz3" :nr-przycisku="3"
            v-if="storeQuizz.ifOdpowiedz"
                 />
            <ButtonAnswer :odpowiedz="storeQuizz.odpowiedz4" :nr-przycisku="4"
            v-if="storeQuizz.ifOdpowiedz"
                 />
            <h2 class="text-gray-600 text-2xl font-[Poppins] font-semibold mt-45 mb-45" v-if="storeQuizz.ifKoniec">End of the quizz</h2>
        </div>

    </div>

</template>

<style scoped></style>