export default class Lampa {
    #szin
    #index
    #szuloELEM

    constructor(szin, index, szuloELEM) {
        this.#szin = szin
        this.#index = index
        this.#szuloELEM = szuloELEM

        this.lampaMegjelenit();

        this.lampaElem = $(".lampa:last")
        this.gombKattint()
    }

    lampaMegjelenit() {
        if(this.#szin === 0) {
            this.#szuloELEM.append(
                `
                <div class="border rounded-circle col-4 lekapcsolt lampa">
                </div>
                `
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

    gombKattint() {
        this.lampaElem.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(e);
        })
    }
}