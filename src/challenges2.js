// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let objetos = [];
  techs = techs.sort();
  for (let tech of techs) {
    objetos.push({ tech: tech, name: name });
  }

  return objetos;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineA + lineB) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(msg) {
  // seu código aqui
  let total = 0;
  for (let index in msg) {
    if (msg.charCodeAt(index) >= 49 && msg.charCodeAt(index) <= 57) {
      switch (msg.charCodeAt(index)) {
        case 49:
          total += 1;
          break;
        case 50:
          total += 2;
          break;
        case 51:
          total += 3;
          break;
        case 52:
          total += 4;
          break;
        case 53:
          total += 5;
          break;
        case 54:
          total += 6;
          break;
        case 55:
          total += 7;
          break;
        case 56:
          total += 8;
          break;
        case 57:
          total += 9;
          break;
      }
    }
  }

  if (total == 1) {
    return `${total} copo de água`;
  }

  return `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
