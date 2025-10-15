<script setup lang="ts">
//https://dribbble.com/shots/24364665-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-UIUX
//https://dribbble.com/shots/24364687-slothUI-World-s-Laziest-Design-System-E-Learning-Quiz-Dark
</script>

<template>
    <div class=" bg-white p-4 flex flex-col rounded-lg items-center justify-center">

        <div class="w-52 h-8 rounded-lg bg-blue-100 border-blue-200 border-2 border-solid flex items-center justify-center text-center self-center">
            <p class="text-black font-[Poppins] ">Sprawdź swoją wiedzę</p>
        </div>
        <h1 class="text-gray-600 text-4xl font-[Poppins] font-semibold mt-8 mb-10">
            Jak dobrze znasz nowelę "Latarnik"?
        </h1>
        <hr class="w-200 h-px my-8 bg-gray-200 border-0 dark:bg-gray-200">
        <div class="text-gray-600 font-[Poppins]  w-215 h-12 m-2 mb-4 text-left">
            <p class ="text-xl font-semibold mb-2">Gdzie rozgrywa się akcja noweli „Latarnik”?</p>
            <p class ="text-sm">Możesz wybrać tylko jedną odpowiedź.</p>
        </div>
        <div class="grid grid-cols-1 gap-2 text-gray-600 font-[Poppins] ">
            <button class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid">
                Buenos Aires
            </button>
            <button class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid" >
                Aspinwall
            </button>
            <button class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid">
                Lwów
            </button>
            <button class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid">
                Nowy Jork
            </button>
        </div>

    </div>

</template>

<style scoped></style>