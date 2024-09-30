export default class Lampa {
    #szin
    #index
    #szuloELEM 

    constructor(szin, index, szuloELEM) { //példányosítunk sokmindent
        this.#szin = szin // itt a szín azt jelenti hogy 0 vagy 1, ezek szerint rendeljük majd hozzájuk a szineket
        this.#index = index // hanyadik elem lesz a listában
        this.#szuloELEM = szuloELEM //ahova belenyomjuk az egész játékteret meg mindent, majd kontrollerben fogjuk pontosan megadni

        this.lampaMegjelenit(); //példányosítjuk a metódust amellyel EGY DARAB KÖRT csinálunk

        this.lampaElem = $(".lampa:last") // itt megfogom a lampaMEgjelenitben létrehozott divet a "lampa" classján keresztül és aztmondom ezlesz a lampaElem (amit gombkattintban használok); :last => utolsó elem, hogy ne az összes legyen, csak azt az egy konkrét elemet (egyedi osztályt rendelek hozzá és csak ezt fogja kiválasztani)
        this.gombKattint() //példányosítjuk a metódust amellyel kattintásra egy saját eseményt generáltunk
    }

    lampaMegjelenit() { // ezzel a metódussal EGY DARAB KÖRT csinálunk, egy divet jelenít meg
        if(this.#szin === 0) { // megmondjuk, hogy ha a modellben generált, ehhez rendelt és egy listába rakott szám 0 akkor olyan div rendelődjön hozzá melynek egy class értéke szerint egy fajta színt adunk css-ben
            this.#szuloELEM.append(
                `
                <div class="border rounded-circle col-4 lekapcsolt lampa"> 
                </div>
                `// kiemelendő: lekacsolt s a lámpa -> lampaElem
            )
        } else {
            this.#szuloELEM.append(
                `
                <div class="border rounded-circle col-4 felkapcsolt lampa">
                </div>
                `
            )
        }
    }

    gombKattint() { //kattintásra történő esemény metódusa
        this.lampaElem.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index}) //saját esemény "katt", megmondja, hogy a kattintás esemny után melyik elemre kattintottunk -> detail:this.#index -> átad az objektum magáról információkat; lsd. késöbb kontroller (?)
            window.dispatchEvent(e); // a korábbi eseményt ezzel az ablakhoz rendelem, és az egész ablakon elérhetővé teszem
        })
    }
}