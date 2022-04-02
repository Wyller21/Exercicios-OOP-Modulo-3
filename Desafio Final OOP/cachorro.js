import { Animal } from "./mundoAnimal.js";

class Cachorro extends Animal {
    constructor (filo = null, classe = null, ordem = null, raca = null, animalDomestico = true, peso = 0, expectativaVida = 0, bravo = false) {

        super(filo, classe, ordem, raca, animalDomestico, peso, expectativaVida);
        this.bravo = bravo;
    }
    
    #vidas

    som(){
        return "Au! Au! Au!";
    }

    dormir(){
        return "zzzzzzz...";
    }

    comer(){
        return "Nham Nham!";
    }
    
    farejar(){
        return "Snif! Snif! Snif!";
    }

}

export { Cachorro };