// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 && val2){
    return true
  } 
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(srt) {
  // seu código aqui
  return srt.split(' ')
}

// Desafio 4
function concatName(arrStr) {
  // seu código aqui
  return arrStr[arrStr.length -1] + ', ' +arrStr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let repete = 0
  let ordenado = []
  for (let i in numeros){
    if (maiorNumero < numeros[i]){
      maiorNumero = numeros[i]
    }    
  }

  for (let i in numeros){
    if (maiorNumero === numeros[i]){
      repete += 1;
    }
  }
  
  return repete
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1)
  let posicaoCat2 = Math.abs(mouse - cat2)
  let retorno = ''
  if ( posicaoCat1 > posicaoCat2){
    retorno = 'cat2'
  } else if ( posicaoCat1 < posicaoCat2){
    retorno = 'cat1'
  } else {
    retorno = 'os gatos trombam e o rato foge'
  }
  
  return retorno
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrRetorno = []
  for (let i = 0; i < numeros.length; i += 1){
    let fizOuBuzz = ''
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
      fizOuBuzz ="fizzBuzz"
    } else if (numeros[i] % 5 == 0){
      fizOuBuzz ="buzz"
    } else if (numeros[i] % 3 === 0){
      fizOuBuzz ="fizz"
    } else if (numeros[i] % 3 !== 0 && numeros[i] % 5 !== 0){
      fizOuBuzz ="bug!"
    }
    arrRetorno.push(fizOuBuzz)
  }
  return arrRetorno

}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
