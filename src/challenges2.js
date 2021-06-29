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
function generatePhoneNumber(numbers) {
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let quant = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        quant += 1;
        if (quant >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    quant = 0;
  }

  let phoneNumber = '';
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      phoneNumber += '(';
    }
    if (index === 2) {
      phoneNumber += ') ';
    }
    if (index === 7) {
      phoneNumber += '-';
    }

    phoneNumber += numbers[index];
  }

  return phoneNumber;
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
