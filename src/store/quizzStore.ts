import { defineStore } from "pinia";
import { ref, nextTick } from "vue";
import { metodyPomocnicze } from "../lib/metodyPomocnicze";
import gameData from "../data/pytania.json";
import type { Question } from "../types";

export const useQuizzStore = defineStore("storeQuizz", () => {
  const kolekcjaPytan = ref<Question[]>(gameData.poziom1);
  const kolekcjaPytanB = ref<Question[]>(gameData.poziom1b);
  const kolekcjaPytanC = ref<Question[]>(gameData.poziom1c);
  const pytanie = ref("pytanie");
  const odpowiedz1 = ref("odpowiedz1");
  const odpowiedz2 = ref("odpowiedz2");
  const odpowiedz3 = ref("odpowiedz3");
  const odpowiedz4 = ref("odpowiedz4");
  const nrOdpowiedziDobrej = ref(0);
  const wybranaOdpowiedz = ref(0);

  const nrKolejki = ref(0);

  //metoda dodajaca losowo pytania
  async function addQuestion() {
    let iloscElementowKolekcjiPytan = gameData.poziom1.length - nrKolejki.value;
    let pytanieNr: number;
    pytanieNr = metodyPomocnicze.wybierzPytanie(iloscElementowKolekcjiPytan);
    console.log("wyswietlane pytanie:" + pytanieNr);
    await nextTick();
    nrKolejki.value++;
    pytanie.value = kolekcjaPytan.value[pytanieNr]?.pytanie ?? "";
    odpowiedz1.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz1 ?? "";
    odpowiedz2.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz2 ?? "";
    odpowiedz3.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz3 ?? "";
    odpowiedz4.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz4 ?? "";
    nrOdpowiedziDobrej.value =
      Number(kolekcjaPytan.value[pytanieNr]?.prawidlowa_odpowiedz) || 0;

    await nextTick();
    function pytanieNrindex(_: (typeof kolekcjaPytan.value)[0], index: number) {
      return index !== pytanieNr;
    }
    const result = kolekcjaPytan.value.filter(pytanieNrindex);
    kolekcjaPytan.value = result;
    console.log(kolekcjaPytan.value);
    await nextTick();
    console.log("oczekiwana odpowiedz:" + nrOdpowiedziDobrej.value);
  }

  return {
    kolekcjaPytan,
    kolekcjaPytanB,
    kolekcjaPytanC,
    pytanie,
    odpowiedz1,
    odpowiedz2,
    odpowiedz3,
    odpowiedz4,
    nrOdpowiedziDobrej,
    wybranaOdpowiedz,
    addQuestion,
  };
});
