// function greet() {
//   console.log('hi');
// }

// const fExpression = function () {
//   console.log('hey');
// };

// fExpression.test = 'testE';

// function log(a) {
//   console.log(a());
// }

// log(function (b, n) {
//   console.log(arguments);
//   console.log('funciton prints the log');
// });

// function greet(firstName, lastName, language) {
//   if (arguments.length === 0) {
//     console.log('Missing parameters');
//     console.log('----------------');
//     return;
//   }
//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log(arguments);
//   console.log('----------------');
// }

// greet();
// greet('John');
// greet('John', 'Lop');
// greet('John', 'Lop', 'rus');

function greet(firstName, lastName, language) {
  language = language || 'en';
  if (language === 'en') {
    console.log('hello ', firstName, lastnme);
  }

  if (language === 'es') {
    console.log('Hola ', firstName, lastName);
  }
}

function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, 'en');
}
function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, 'es');
}

greetEnglish('Vadim', 'Lopa', 'en');
greetSpanish('Vadim', 'Lopa', 'en');
