const getDupesAsStringFactory = require('../src/training');

describe('Getting unique dupes from string input by using function factory', () => {
  it('should return string of unique dupes via set approach stored in the closure', () => {
    expect(getDupesAsStringFactory('viaSet')('homedepot')).toEqual('eo');
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
