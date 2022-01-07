function techList(techs, nome) {
  return techs.length === 0 
    ? 'Vazio!'
    : techs.sort().map((item) => ({ tech: item, name: nome}));
}

function countNumber(number, array) {
  return array.reduce((acc, res) => (number === res ? acc + 1 : acc), 0);
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (numbers.some((number) => number < 0 || number > 9)
    || numbers.some((number) => countNumber(number, numbers) >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const phoneNumber = numbers;
  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ') ');
  phoneNumber.splice(9, 0, '-');

  return phoneNumber.join('');
}

function checkSumOfSides(lineA, lineB, lineC) {
  return lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA;
}

function checkAbsDifference(lineA, lineB, lineC) {
  return lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineA - lineB);
}

function triangleCheck(lineA, lineB, lineC) {
  return checkSumOfSides(lineA, lineB, lineC) && checkAbsDifference(lineA, lineB, lineC);
}

function hydrate(string) {
  const total = string.match(/\d/g).reduce(
    (acc, res) => acc + Number(res), 0,
  );

  return total > 1 ? `${total} copos de água` : '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
