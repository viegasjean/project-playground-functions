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
function highestCount(arrNumbers) {
  // seu código aqui

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrFizzBuzz) {
  // seu código aqui
  let arrRetorno = []
  for (let n of arrFizzBuzz){
    if (n % 3 === 0){
      arrRetorno.push("fizz")
    } else if (n % 5 === 0){
      arrRetorno.push("buzz")
    } else if (n % 5 === 0 && n % 3 === 0){
      arrRetorno.push("fizzBuzz")
    } else {
      arrRetorno.push("bug!")
    }
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
