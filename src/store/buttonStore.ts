import { defineStore } from "pinia";
import { ref } from "vue";

export const useButtonStore = defineStore("storeButton", () => {
  const button1Background = ref("");
  const button2Background = ref("");
  const button3Background = ref("");
  const button4Background = ref("");

  return {
    button1Background,
    button2Background,
    button3Background,
    button4Background,
  };
});
