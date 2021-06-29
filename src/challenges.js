// Desafio 1
function compareTrue(primeiro, segundo) {
  // seu código aqui
  if (primeiro && segundo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(msg) {
  // seu código aqui
  let array = msg.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length -1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
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
  } else if (cat2 < cat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let array2 = [];
  for (let valor of array) {
    if (valor % 3 === 0 && valor % 5 === 0) {
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
