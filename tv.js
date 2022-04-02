console.log("TV");

class Tv {
    constructor(fabricante=null, polegada=0, ligada=false, canal=0, volume=0, ) {
        this.#fabricante = fabricante;
        this.#polegada = polegada;
        this.#ligada = ligada;
        this.#canal =  canal;
        this.#volume = volume;    
    }

    #canal
    #volume
    #ligada
    #fabricante
    #polegada

    ligar() {
        this.#ligada = true
        return "A Tv foi ligada.";
    }

    desligar() {
        this.#ligada = false
        return "A Tv foi desligada.";
    }

    mudarCanal (numero = this.#canal) {
        if(this.#ligada){
            return "O canal foi mudado para: " + (numero = this.#canal);
        } else{
            return "Não foi possível trocar de canal, a Tv está desligada.";
        }
    }

    aumentarVolume() {
        if(this.#ligada){
            return `O volume foi aumentado para: ${this.#volume += 1}`;
        } else{
            return "Não foi possível aumentar o volume, a Tv está desligada.";
        }
    }

    diminuirVolume() {
        if(this.#ligada){
            return `O volume foi diminuído para: ${this.#volume -= 1}`;
        } else{
            return "Não foi possível Diminuir o volume, a Tv está desligada.";
        }
    }

    information() {
        return `Sua tv está ${(this.#ligada) ? "Ligada." : "Desligada." }`;
    }
    

}

const samsung = new Tv("samsung", 42, false, 5, 8);

const aoc = new Tv("aoc", 32, false, 13, 12);

console.log(samsung);
console.log(samsung.ligar());
console.log(samsung.mudarCanal(2));
console.log(samsung.desligar());
console.log(samsung.mudarCanal(7));
console.log(samsung.ligar());
console.log(samsung.aumentarVolume());
console.log(samsung.aumentarVolume());
console.log(samsung.diminuirVolume());
console.log(samsung.information());









