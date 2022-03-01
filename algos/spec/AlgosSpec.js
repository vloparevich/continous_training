const { getDupesAsStringFactory, getMaxLetterCount, getFirstUniqueCharacter, getDoubleNumber, arrOfIndexesOfTwoSum } = require('../src/training');

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
  })
});

describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const firstNonRepeatingChar = getFirstUniqueCharacter('tseesavvbat');
    expect(firstNonRepeatingChar).toEqual("b");
  })
})

describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const doubleNumber = getDoubleNumber([3,6,6]);
    expect(doubleNumber).toEqual(true);
  })
})


describe('GEt first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const doubleNumber = getDoubleNumber([3,6,6]);
    expect(doubleNumber).toEqual(true);
  })
})

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSum([2,7,11,15], 9);
    expect(arrOfIndexPositions).toEqual([0,1]);
  })
})

describe('Return array of indexes of numbers which are giving target after an addition', () => {
  it('should return 2 index positions of numbers which makes a target after sum', () => {
    const arrOfIndexPositions = arrOfIndexesOfTwoSum([3,3], 6);
    expect(arrOfIndexPositions).toEqual([0,1]);
  })
})

