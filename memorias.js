export class memorias {
    #tipo; #tam; #color;
    constructor(tipo, tam, color) {
        this.#tipo = tipo;
        this.#tam = tam;
        this.#color = color;
    }
    get tipo() {
        return this.#tipo
    }

    get tam() {
        return this.#tam
    }
    get color() {
        return this.#color
    }

    set tipo(nuvtipo) {
        this.#tipo = nuvtipo;
    }

    set tam(nuvtam) {
        this.#tam = nuvtam;
    }
    set color(col) {
        this.#color = col;
    }

}
export class ola extends memorias{
    #diodo
    constructor(tipo,tam,color, diodo){
        super(tipo,tam,color)
        this.#diodo = diodo
    }
    get diodo(){
        return this.#diodo
    }
    set diodo(deodo){
        this.#diodo = deodo
    }
}