
const frutas = [ "Mango", "Pera", "Manzana", "Mango", "Piña", "Fresa", "Naranja", "Pera", "Cereza", "Mango" ];

const contadorFrutas = {};


for(let i = 0; i < frutas.length; i++){

    const fruta = frutas[i];

    if(contadorFrutas[fruta]){
        contadorFrutas[fruta] += 1;
    }else{
        contadorFrutas[fruta] = 1;
    }

}

console.log("Conteo de frutas:", contadorFrutas);

