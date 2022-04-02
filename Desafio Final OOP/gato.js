import { Animal } from "./mundoAnimal.js";

class Gato extends Animal {
    constructor (filo = null, classe = null, ordem = null, raca = null, animalDomestico = true, peso = 0, expectativaVida = 0, vidas = 7) {

        super(filo, classe, ordem, raca, animalDomestico, peso, expectativaVida);
        this.vidas = vidas;
    }
    
    #vidas

    som(){
        return "Miau! Miau! Miau!";
    }

    dormir(){
        return "zzzzzzz...";
    }

    comer(){
        return "Nham Nham!";
    }
    
    ronronar(){
        return "Purr Purr Purr...";
    }

}

export { Gato };