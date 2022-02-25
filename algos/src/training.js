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
const getDupesAsStringFactory = (approach) => {
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

const getLetterObject = (arbitraryString) => {
  return arbitraryString.split('').reduce((acc, el) => {
    if (el in acc) {
      return { ...acc, [el]: acc[el] + 1 };
    } else {
      return { ...acc, [el]: 1 };
    }
  }, {});
};

const getLttersInMap = (arbitraryString) => {
  const map = new Map();
}

const getMaxLetterCount = (arbitraryString) => {
  const letterObj = getLetterObject(arbitraryString);
  let maxAppearance = {};
  for (const key in letterObj) {
    if (Object.keys(maxAppearance).length === 0) {
      maxAppearance[key] = letterObj[key];
    } else {
      for (const maxAppearedKey in maxAppearance) {
        if (maxAppearance[maxAppearedKey] < letterObj[key]) {
          maxAppearance = {};
          maxAppearance[key] = letterObj[key];
        }
      }
    }
  }
  return maxAppearance;
};

const getFirstUniqueCharacter = (str) => {
  const letterObj = getLetterObject(str);
  for (let i = 0; i < str.length; i++) {
    if (letterObj[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
};

const getFirstUniqueCharViaMap = (str) => {
  if (
    typeof str === 'number' ||
    typeof str === 'function' ||
    typeof str === 'undefined' ||
    typeof str === 'boolean'
  )
    return -1;
  const map = new Map();
  str
    .split('')
    .forEach((el) =>
      map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1)
    );
  for ([key, value] of map) {
    if (value === 1) return key;
  }
  return -1;
};

const getDoubleNumber = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = 1;
        const divider = arr[i] / 2;
        if(obj[divider]) {
          return true;
        }
      }
  return false;
}

module.exports = {
  getDupesAsStringFactory,
  getMaxLetterCount,
  getFirstUniqueCharacter,
  getDoubleNumber,
  getFirstUniqueCharViaMap,

};
