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

const getLetterMap = (arbitraryString) => {
  return arbitraryString.split('').reduce((acc, el) => {
    if (acc.has(el)) {
      return acc.set(el, acc.get(el) + 1);
    } else {
      return acc.set(el, 1);
    }
  }, new Map());
};

const getMaxLetterCount = (arbitraryString) => {
  const mapLettters = getLetterMap(arbitraryString);
  let resultKey = '';
  let maxValue = 0;
  for (let [key, value] of mapLettters) {
    if (maxValue < value) {
      resultKey = key;
      maxValue = value;
    }
  }
  return { [resultKey]: maxValue };
};

const getMaxLetterCountLong = (arbitraryString) => {
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
  const record = new Set();
  for (const num of arr) {
    debugger;
    const half = num / 2;
    const double = num * 2;
    if (record.has(half) || record.has(double)) return true;
    record.add(num);
  }
  return false;
};

const similarGetDoubleNumber = () => {
  const obj = {};
  for (const num of arr) {
    const half = num / 2;
    const double = num * 2;
    if (obj[half] || obj[double]) return true;
    obj[num] = 1;
  }
  return false;
};

const arrOfIndexesOfTwoSum = (nums, target) => {
  const result = [];
  let first = nums[0];

  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const tempResult = first + nums[j];
      if (tempResult === target) {
        result.push(nums.indexOf(first));
        result.push(j);
        break;
      }
    }
    first = nums[i];
  }
  return result;
};

const arrOfIndexesOfTwoSumSecondApproach = (nums, target) => {
  const memo = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const missingNum = target - nums[i];

    if (missingNum in memo) {
      result.push(i);
      result.push(memo[missingNum]);
      break;
    }
    memo[nums[i]] = i;
  }
  return result;
};

const lengthOfLongestSubstring = (s) => {
  let map = {};
  let start = 0;
  let maxLen = 0;
  let arr = s.split('');
  for (i = 0; i < s.length; i++) {
    let current = map[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }
    map[arr[i]] = i;
  }
  return maxLen;
};

const isPalindrome = (x) => {
  const arr = ('' + x).split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

const isPalindromeSinglyLinkedList = (head) => {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    if (arr[i] !== arr[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: {
        value: 1,
        next: null,
      },
    },
  },
};

const maximumUnits = (boxTypes, truckSize) => {
  const sortedLoads = [...boxTypes].sort((a, b) => b[1] - a[1]);
  let result = 0;
  let capacity = truckSize;

  for (let i = 0; i < boxTypes.length; i++) {
    if (sortedLoads[i][0] <= capacity) {
      result += sortedLoads[i][0] * sortedLoads[i][1];
    } else {
      result += capacity * sortedLoads[i][1];
      return result;
    }
    capacity -= sortedLoads[i][0];
  }
  return result;
};

const buildArrayByPermutingInput = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};

const sortedSquares = (nums) => {
  return nums.map((el) => (el *= el)).sort((a, b) => a - b);
};

const mergeTwoArraysAtPlace = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};

const romanToInt = (s) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let strArr = s.split('');
  let i = 0;
  while (i < strArr.length) {
    const curr = roman[strArr[i]];
    const next = roman[strArr[i + 1]];
    if (curr >= next) {
      result += curr;
    } else if (curr < next) {
      result += next - curr;
      i += 2;
      continue;
    } else {
      result += curr;
    }
    i++;
  }
  return result;
};

const numIdenticalPairs = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result++;
      }
    }
  }
  return result;
};

const reverseLinkedList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  let current = head;
  let previous = null;
  let nextTemp = null;
  while (head) {
    nextTemp = current.next;
    current.next = previous;
    previous = current;
    current = nextTemp;
  }
  return previous;
};

const isBalancedExpression = (s) => {
  const arr = s.split('');
  const temp = [];
  for (const curr of arr) {
    if (curr === '{') temp.push('{');
    if (curr === '[') temp.push('[');
    if (curr === '(') temp.push('(');
    if (
      (curr === ')' && temp.pop() !== '(') ||
      (curr === ']' && temp.pop() !== '[') ||
      (curr === '}' && temp.pop() !== '{')
    ) {
      return false;
    }
  }
  if (arr.length === 1 || temp.length !== 0) return false;
  return true;
};

const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return nums.length;
};

const maxSubArraySum = (arr = []) => {
  if (!arr.length) {
    return 0;
  }
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let interimSum = 0;
    for (let j = i; j < arr.length; j++) {
      interimSum += arr[j];
      maxSum = Math.max(maxSum, interimSum);
    }
  }
  return maxSum;
};

const maxSubArraySum2 = (nums = []) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...nums);
};

const removeAllTheElementOccurencies = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

const plusOne = function (digits) {
  const number = BigInt([...digits].join(''));
  const biggerNumber = number + 1n;
  const stringNumberArr = biggerNumber.toString().split('');
  const result = stringNumberArr.map(Number);
  return result;
};

module.exports = {
  removeAllTheElementOccurencies,
  getDupesAsStringFactory,
  getMaxLetterCount,
  getFirstUniqueCharacter,
  getDoubleNumber,
  getFirstUniqueCharViaMap,
  arrOfIndexesOfTwoSum,
  arrOfIndexesOfTwoSumSecondApproach,
  lengthOfLongestSubstring,
  isPalindromeSinglyLinkedList,
  maximumUnits,
  mergeTwoArraysAtPlace,
  romanToInt,
  numIdenticalPairs,
  isBalancedExpression,
  missingNumber,
  maxSubArraySum,
  plusOne,
};
