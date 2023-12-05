class termekModel {
    #termek = [{ konyvcim: "Szabó", szerzo: "Szabó András", ar: 2999 },
    { konyvcim: "Az igazi harcos", szerzo: "Papaszita", ar: 2999 },
    { konyvcim: "Könyvet fogok írni", szerzo: "Nem gyanus Nabu senpai", ar: 2999 },
    { konyvcim: "Hogyan éljén ingyen", szerzo: "MC Isti", ar: 2999 },
    { konyvcim: "A halrudi", szerzo: "Eric Cartman", ar: 2999 }]

    getLista(){
        return [...this.#termek]
    }
}

export default termekModel;