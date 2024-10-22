import { memorias } from "./memorias";
import { ola } from "./memorias";
const memori = new memorias("DDR4", "16GB", "VERDE");
memori.tipo = "DDR5"
memori.tam = "8gb"
memori.color = "AZUL"

const memori1 = new ola("DDR4", "16GB", "VERDE", "SI");
memori1.diodo = "KK"
console.log(memori.tam);
console.log(memori1.diodo);

