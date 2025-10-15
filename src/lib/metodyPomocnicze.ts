export class metodyPomocnicze {
  constructor() {}

  //metoda losująca zestaw pytań
  static wybierzZestawPytan() {
    let numerZestawuPytan;
    numerZestawuPytan = Math.floor(Math.random() * 3);
    return numerZestawuPytan;
  }

  //metoda losująca pytanie w etapie1
  static wybierzPytanie(n: number) {
    let numerPytania;
    numerPytania = Math.floor(Math.random() * n);
    return numerPytania;
  }
}
