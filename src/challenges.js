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

function highestCount(values) {
  const highest = Math.max(...values);
  return values.reduce((acc, curr) => (curr === highest ? acc + 1 : acc), 0);
}

function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(cat1 - mouse);
  const dist2 = Math.abs(cat2 - mouse);

  if (dist1 < dist2) return 'cat1';
  if (dist2 < dist1) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

function fizzBuzz(numbers) {
  return numbers.map((number) => {
    if (number % 15 === 0) {
      return 'fizzBuzz';
    }
    if (number % 3 === 0) {
      return 'fizz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;  
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
