export default class LOModell {
    #lista = [] //csinálunk egy üres listát, ebbe rakjuk majd a random számokat

    constructor() {
        this.listafeltolt() //példányosítjuk a listafeltolt metódust
    }

    listafeltolt() {
        for (let i = 0; i < 9; i++) {
            let szam = Math.floor(Math.random() * 2) //random számokat generálunk 0-1
            this.#lista.push(szam) //belenyomjuk az egyre kevésbé üres listánkba
        }
        //console.log(this.#lista)
    }

    getList() { // !!!!!!!!!!!!!!!!!!! FONTOS
        return this.#lista // itt a telenyomott listát adom vissza hogy tudjunk vele dolgozni
    }

    lampakapcsol(index) { // na itt mondjuk meg hogy melyik lámpa mikor fog fel meg le kapcsolódni
        if (index === 8) {
            this.#valt(index) // a valt metódust hívjuk, az index-et (amit majd a kontrollerbe fogunk neki a detail.event-el megadni) megadjuk paraméterben
            this.#valt(index-1)
            this.#valt(index-3)
        } else if (index === 7) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-1)
            this.#valt(index-3)
        } else if (index === 6) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-3)
        } else if (index % 3 === 0) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index+3)
            this.#valt(index-3)
        } else if (index % 3 === 2) {
            this.#valt(index)
            this.#valt(index-1)
            this.#valt(index+3)
            this.#valt(index-3)
        } else {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-1)
            this.#valt(index+3)
            this.#valt(index-3)
        }
    }
    #valt(id){ // ez az alap metódus, egyszerű, tehát ha 0 az ID akkor 1 legyen, ha 1 akkor meg 0 => színváltakozás; paramétere az "ID" vagyis későbbiekben az index -> pontosan melyik körről beszélünk
        if (this.#lista[id] === 0) {
            this.#lista[id] = 1
            
        }else{
            this.#lista[id] = 0
        }
    }
}