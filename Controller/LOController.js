import LOModell from "../Modell/LOModell.js";
import Palya from "../View/Palya.js";

export default class LOController {
    constructor() { // itt példányosítunk
        this.taroloElem = $(".tartalom") 
        this.lomodell = new LOModell() // itt kerül a MODELL példányosításra
        new Palya(this.lomodell.getList(), this.taroloElem) //itt kerül a VIEW példányosításra
        this.#esemenykezelo() // itt hívjuk meg az ESEMÉNYKEZELŐt (a nagybetűs metódust)
        //console.log(this.lomodell.getList())
    }

    #esemenykezelo() { // # => ez privát
        $(window).on("katt", (event)=>{ // ez a már korábban megcsinált custom event esemény
            //console.log(event.detail)
            this.lomodell.lampakapcsol(event.detail); //itt a MODELL kerül meghívásra; event.detail -> ide tesszük a custom event esemény által kapott detailt(??)
            new Palya(this.lomodell.getList(), this.taroloElem) //itt a VIEW kerül meghívásra -> aszerint hogy ebben milyen paraméterek szükségesek -> lomodell.getList() ez itt a felpakolt listánkat adja meg, taroloElem meg hát na
        })
    }
}