import Lampa from "./Lampa.js";

export default class Palya { // ez nem csak egy, hanem annyi kört/mezőt példányosít amennyi kell
    #lista = []
    #szuloELEM

    constructor(lista, szuloELEM) { //példányosítások
        this.#lista = lista
        this.#szuloELEM = szuloELEM

        this.#szuloELEM.empty() // szülőelemet mindig ürítjük, mielőtt újra melekerlne adat !!!!
        this.lampakKiir() // metódus példányosítása
    }

    lampakKiir() {
        this.#lista.forEach((elem, index) => { //a kontrollerben megadott, modellből vett lista hosszán s elemein végigmenve fogja tudni, hogy mennyit kell ebből példányosítania
            new Lampa(elem, index, this.#szuloELEM) // itten hívja a Lampa osztályt, hogy ebből az 1db-ból csináljon annyit amennyi kell -> elem = szin, index = index, szuloelem = this.#szuloelem (ez majd kontrollerben lesz megadva)
        })
    }
}