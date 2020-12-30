import { Domino } from './domino.js';

function initializeDominoes() {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2 ,4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}


function print(dominoes) {
  dominoes.forEach(console.log);
}

let dominoes = initializeDominoes();
for (let i = 0; i < dominoes.length; i++){
    for ( let j = 0; j < dominoes.length; j++){
        if ( dominoes[i].values[1] === dominoes[j].values[0]){
            dominoes.splice(i + 1, 0, dominoes.splice(j, 1)[0])
        }
    }
}

print(dominoes);