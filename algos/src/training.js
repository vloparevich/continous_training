const titleCase = (title, minors) => {
  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      return minors &&
        minors.toLowerCase().split(' ').include(word) &&
        index !== 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1);
    });
};

function dataReverse(data) {
  let result = [];
  let chunk = 8;
  for (let i = 0; i < data.length; i += chunk) {
    const currentChunk = data.slice(i, i + chunk).reverse();
    result = [...result, ...currentChunk];
  }
  return result.reverse();
}

function arrayDiff(a, b) {
  const result = [];
  a.map((current) => {
    if (!b.includes(current)) {
      result.push(current);
    }
  });
  return result;
}

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function digitalRoot(n) {
  // 842 => 14 => 5
  let result = 0;
  let arr = (n + '').split('');
  while (arr.length >= 2) {
    result = arr.reduce((acc, curr) => (acc += +curr), 0);
    arr = (result + '').split('');
  }
  return result;
}

//==============================================================
module.exports = getDupesAsStringFactory = (approach) => {
  return function (string) {
    if (approach === 'viaSet') {
      let result = '';
      const set = new Set();
      string.split('').forEach((el) => {
        const prevSetLength = set.size;
        prevSetLength === set.add(el).size ? (result += el) : '';
      });
      return result;
    } else if (approach === 'viaFilter') {
      return string
        .split('')
        .filter((el, index, arr) => arr.indexOf(el) !== index)
        .join('');
    }
  };
};
