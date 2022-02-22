const {
  getDupesAsStringFactory,
  getMaxLetterCount,
  getFirstUniqueCharacter,
  getFirstUniqueCharViaMap,
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

describe('Get first non repeating character from string by using object of letters against the origin string', () => {
  it('should return first non repeating character from string', () => {
    const firstNonRepeatingChar = getFirstUniqueCharacter('tseesavvbat');
    expect(firstNonRepeatingChar).toEqual('b');
  });
});

describe('Get first unique char from arbitrary string by using MAP data structure', () => {
  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap('tseesavvbat');
    expect(result).toEqual('b');
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap('tseesavvbbat');
    expect(result).toEqual(-1);
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap('T');
    expect(result).toEqual('T');
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap('');
    expect(result).toEqual(-1);
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap(123);
    expect(result).toEqual(-1);
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap(() => 'test');
    expect(result).toEqual(-1);
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap(undefined);
    expect(result).toEqual(-1);
  });

  it('should return first non repeating char from string', () => {
    const result = getFirstUniqueCharViaMap(true);
    expect(result).toEqual(-1);
  });
});
