let binarneCislo = "101101";
let desiatkoveCislo = 0;
let aktualnaMocnina = 1;
let dlzka = binarneCislo.length;

for (let index = dlzka - 1; index >= 0; index--) {
    let znak = binarneCislo[index];
    if (znak === "1") {
        desiatkoveCislo = desiatkoveCislo + aktualnaMocnina;
    } else {
    }
    aktualnaMocnina = aktualnaMocnina * 2;
}
console.log("Výsledok v desiatkovej hodnote je:", desiatkoveCislo);
