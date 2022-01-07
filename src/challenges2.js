// Desafio 10
function techList(techs, nome) {
  // seu código aqui
  return techs.length === 0 ? 'Vazio!' : techs.sort().map((item) => ({ tech: item, name: nome}));
}

function verificaDigitos(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }

  return false;
}

function verificaQuantidade(numbers) {
  let quant = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        quant += 1;
        if (quant >= 3) {
          return true;
        }
      }
    }
    quant = 0;
  }

  return false;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (verificaDigitos(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (verificaQuantidade(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
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
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }

  return false;
}

// Desafio 13
function getTotal(msg) {
  let total = 0;
  for (let index in msg) {
    if (msg.charCodeAt(index) >= 49 && msg.charCodeAt(index) <= 57) {
      total += Number(msg[index]);
    }
  }

  return total;
}

function hydrate(msg) {
  // seu código aqui
  const total = getTotal(msg);

  return total === 1 ? '1 copo de água' : `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
