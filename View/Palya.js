import Lampa from "./Lampa.js";

export default class Palya {
    #lista = []
    #szuloELEM

    constructor(lista, szuloELEM) {
        this.#lista = lista
        this.#szuloELEM = szuloELEM

        this.#szuloELEM.empty()
        this.lampakKiir()
    }

    lampakKiir() {
        this.#lista.forEach((elem, index) => {
            new Lampa(elem, index, this.#szuloELEM)
        })
    }
}