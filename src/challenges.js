function compareTrue(first, second) {
  return first && second;
}

function calcArea(base, height) {
  return (base * height) / 2;
}

function splitSentence(msg) {
  return msg.split(' ');
}
console.log(splitSentence('Meu nome é Douglas'));

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = Math.max.apply(null, array);
  let quant = 0;
  for (let valor of array) {
    if (valor === maior) {
      quant += 1;
    }
  }

  return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);

  if (cat1 < cat2) {
    return 'cat1';
  }

  if (cat2 < cat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let array2 = [];
  for (let valor of array) {
    if (valor % 15 === 0) {
      array2.push('fizzBuzz');
    } else if (valor % 3 === 0) {
      array2.push('fizz');
    } else if (valor % 5 === 0) {
      array2.push('buzz');
    } else {
      array2.push('bug!');
    }
  }

  return array2;
}

// Desafio 9
function encode(msg) {
  // seu código aqui
  let codMsg = '';
  for (let letter of msg) {
    switch (letter) {
    case 'a':
      codMsg += '1';
      break;
    case 'e':
      codMsg += '2';
      break;
    case 'i':
      codMsg += '3';
      break;
    case 'o':
      codMsg += '4';
      break;
    case 'u':
      codMsg += '5';
      break;
    default:
      codMsg += letter;
      break;
    }
  }
  return codMsg;
}
function decode(codMsg) {
  // seu código aqui
  let msg = '';
  for (let letter of codMsg) {
    switch (letter) {
    case '1':
      msg += 'a';
      break;
    case '2':
      msg += 'e';
      break;
    case '3':
      msg += 'i';
      break;
    case '4':
      msg += 'o';
      break;
    case '5':
      msg += 'u';
      break;
    default:
      msg += letter;
      break;
    }
  }
  return msg;
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
