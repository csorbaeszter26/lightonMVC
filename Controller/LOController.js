import LOModell from "../Modell/LOModell.js";
import Palya from "../View/Palya.js";

export default class LOController {
    constructor() {
        this.taroloElem = $(".tartalom")
        this.lomodell = new LOModell()
        new Palya(this.lomodell.getList(), this.taroloElem)
        this.#esemenykezelo()
        console.log(this.lomodell.getList())
    }

    #esemenykezelo() {
        $(window).on("katt", (event)=>{
            console.log(event.detail)
            this.lomodell.lampakapcsol(event.detail);
            new Palya(this.lomodell.getList(), this.taroloElem)
        })
    }
}