<script setup lang="ts">
const props = defineProps(["question"])
</script>

<template>
    <div class="text-gray-600 font-[Poppins]  w-215 h-12 m-2 mb-4 text-left">
        <p class="text-xl font-semibold mb-2">{{props.question}}</p>
        <p class="text-sm">Możesz wybrać tylko jedną odpowiedź.</p>
    </div>
</template>

<style></style>