import { Animal } from "./mundoAnimal.js";
import { Cachorro } from "./cachorro.js";
import { Gato } from "./gato.js";
import { Papagaio } from "./papagaio.js";

// const animal = new Animal("Chordata");

const papagaioMarcio = new Papagaio("Chordata", "Ave", "Psitaciformes", "Congo", true, 0.4, 23, "Cinza");
console.log(papagaioMarcio);
console.log(papagaioMarcio.comer());
console.log(papagaioMarcio.dormir());
console.log(papagaioMarcio.voar());
console.log(papagaioMarcio.som());



const gatoKaren = new Gato("Chordata", "Mamífero", "Carnívoros", "Siamês", true, 5.5, 20, 7);
console.log(gatoKaren);
console.log(gatoKaren.comer());
console.log(gatoKaren.dormir());
console.log(gatoKaren.ronronar());
console.log(gatoKaren.som());


const cachorroWyller = new Cachorro("Chordata", "Mamífero", "Carnívoros", "Corgi Pembroke", true, 14, 15, false);
console.log(cachorroWyller);
console.log(cachorroWyller.comer());
console.log(cachorroWyller.dormir());
console.log(cachorroWyller.farejar());
console.log(cachorroWyller.som());





