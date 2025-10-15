<script setup lang="ts">

const props = defineProps(['odpowiedz'])
</script>
<template>
    <button
        class="bg-violet-200 hover:bg-violet-300 cursor-pointer w-215 h-16 m-1 rounded-lg border-violet-400 border-2 border-solid">
        {{ props.odpowiedz }}
    </button>
</template>
<style scoped></style>