// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let objetos = [];
  techs = techs.sort();
  for (let tech of techs) {
    objetos.push({['tech']: tech, ['name']: name});
  }

  return objetos;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
