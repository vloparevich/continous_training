const { getDupesAsStringFactory, getMaxLetterCount } = require('../src/training');

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
    const str = JSON.stringify(getMaxLetterCount('abrakkkkkkkadabra'));
    expect(str).toEqual('{"k":7}');
  })
});
