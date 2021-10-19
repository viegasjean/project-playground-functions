// Desafio 10
function techList(techs, name) {
  // seu código aqui
  
  let myTechs = []
  techs.sort()
  if (techs.length <= 0) {
    return 'Vazio!'
  } else {
    for (let tech of techs) {


      myTechs.push({
        tech: tech,
        name: name
      })
    }

    

  }
  return myTechs
}

// Desafio 11
function generatePhoneNumber(n) {
  // seu código aqui
  if (n.length != 11){
    return "Array com tamanho incorreto."
  }

  for (d1 of n){
    let contaRepetido = 1
    for (d2 of n){
      if(d1 == d2){
        contaRepetido += 1
      }
    }
    if (contaRepetido > 3 || d1 < 0 || d1 > 9){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  return '('+n[0]+n[1]+')'+' '+n[2]+n[3]+n[4]+n[5]+n[6]+'-'+n[7]+n[8]+n[9]+n[10]

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
