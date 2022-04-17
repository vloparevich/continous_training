const {
  isBalancedExpression,
  numIdenticalPairs,
  romanToInt,
  mergeTwoArraysAtPlace,
  getDupesAsStringFactory,
  getMaxLetterCount,
  maximumUnits,
  getFirstUniqueCharacter,
  getDoubleNumber,
  arrOfIndexesOfTwoSum,
  arrOfIndexesOfTwoSumSecondApproach,
  isPalindromeSinglyLinkedList,
  missingNumber,
  maxSubArraySum,
  removeAllTheElementOccurencies,
  plusOne,
} = require('../src/training');

describe('Getting dupes from string input by using function factory', () => {
  it('should return string of unique dupes via set approach stored in the closure', () => {
    expect(getDupesAsStringFactory('viaSet')('abrakadabra')).toEqual('aaabra');
  });

  it('should return string of unique dupes via filter approach stored in the closure', () => {
    expect(getDupesAsStringFactory('viaFilter')('homedepot')).toEqual('eo');
  });
});

describe('Function factory returns Function object as in closure', () => {
  it('should return string of unique dupes via set approach stored in the closure', () => {
    expect(typeof getDupesAsStringFactory('viaSet')).toEqual('function');
  });

  it('should return string of unique dupes via filter approach stored in the closure', () => {
    expect(typeof getDupesAsStringFactory('viaFilter')).toEqual('function');
  });
});

describe('Get max letter count as an object via reduce and working with properties', () => {
  it('should return max letter count as an object from arbitrary string', () => {
    const str = JSON.stringify(getMaxLetterCount('abrakkkkkadabra'));
    expect(str).toEqual('{"a":5}');
  });
});

describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const firstNonRepeatingChar = getFirstUniqueCharacter('tseesavvbat');
    expect(firstNonRepeatingChar).toEqual('b');
  });
});

describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const doubleNumber = getDoubleNumber([3, 6, 6]);
    expect(doubleNumber).toEqual(true);
  });
});

describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const doubleNumber = getDoubleNumber([3, 6, 6]);
    expect(doubleNumber).toEqual(true);
  });
});

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSum([2, 7, 11, 15], 9);
    expect(arrOfIndexPositions).toEqual([0, 1]);
  });
});

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSum([3, 3], 6);
    expect(arrOfIndexPositions).toEqual([0, 1]);
  });
});

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum. Order of elements doe snot matter O(n)', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSumSecondApproach([3, 3], 6);
    expect(arrOfIndexPositions).toEqual([1, 0]);
  });
});

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum. Order of elements doe snot matter O(n)', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSumSecondApproach(
      [2, 7, 11, 15],
      9
    );
    expect(arrOfIndexPositions).toEqual([1, 0]);
  });
});

describe('Veriy if singly linked list is a palindrome', () => {
  it('should return true or false if singly linkedlist is a palindrome. Space complexity O(n), time complexity O(n)', () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    };
    const isLinkedListPalindrome = isPalindromeSinglyLinkedList(head);
    expect(isLinkedListPalindrome).toEqual(true);
  });
});

maximumUnits;

describe('Return maximum possible units to be loaded on truck', () => {
  it('should return a sum of maximum possible units to be loaded', () => {
    const maxUnitsOnTruck = maximumUnits(
      [
        [5, 10],
        [2, 5],
        [4, 7],
        [3, 9],
      ],
      10
    );
    expect(maxUnitsOnTruck).toEqual(91);
  });
});

describe('Merge nums1 and nums2 into a single array sorted in non-decreasing order.', () => {
  it('should mutate the first array by mergin second where start index posiiton is specified for the first arr and num of elements for the second is also specified', () => {
    const arr1 = [1, 2, 3, 0, 0, 0];
    const arr2 = [2, 5, 6];
    mergeTwoArraysAtPlace(arr1, 3, arr2, 3);
    expect(arr1).toEqual([1, 2, 2, 3, 5, 6]);
  });
});

describe('Convert rome numbers into integer', () => {
  it('should convert rome number intro integer by considering the rome\'"s rules', () => {
    const romeNumber = 'MDCXCV';
    const result = romanToInt(romeNumber);
    expect(result).toEqual(1695);
  });
});

describe('Convert rome numbers into integer', () => {
  it('should convert long rome number intro integer by considering the rome\'"s rules', () => {
    const romeNumber = 'MMDCXXIX';
    const result = romanToInt(romeNumber);
    expect(result).toEqual(2629);
  });
});

describe('Return a number of identical pairs', () => {
  it('should return a number of identiacal ongoing pairs', () => {
    const result = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
    expect(result).toEqual(4);
  });
});

describe('Evaluate if bracket expression is balanced.', () => {
  it('should return truie or false for expression of brackets', () => {
    const result = isBalancedExpression('()[]{}');
    expect(result).toEqual(true);

    const result2 = isBalancedExpression('(]');
    expect(result2).toEqual(false);
  });
});

describe('Find missing number in the range of [0...n]', () => {
  it('should return missing number', () => {
    const result = missingNumber([3, 0, 1]);
    const result2 = missingNumber([0, 1]);
    const result3 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toEqual(2);
    expect(result2).toEqual(2);
    expect(result3).toEqual(8);
  });
});

describe('Find maximum sum of values in a sub array', () => {
  it('should return a sum', () => {
    const result = maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    // const result3 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toEqual(6);
    // expect(result2).toEqual(1288333);
  });
});

describe('Remove all the occurencies if the element in array. Original array should be changed, no copies are allowed', () => {
  it('should return the length of the array modified in place', () => {
    const result = removeAllTheElementOccurencies([4, 3, 2, 4, 2, 7], 2);
    expect(result).toEqual(4);
  });
});

describe('Increment the large integer by one and return the resulting array of digits.', () => {
  it('should big integer incremented by 1', () => {
    const result = plusOne([
      6,
      1,
      4,
      5,
      3,
      9,
      0,
      1,
      9,
      5,
      1,
      8,
      6,
      7,
      0,
      5,
      5,
      4,
      3,
    ]);
    expect(result).toEqual([
      6,
      1,
      4,
      5,
      3,
      9,
      0,
      1,
      9,
      5,
      1,
      8,
      6,
      7,
      0,
      5,
      5,
      4,
      4,
    ]);
  });
});
