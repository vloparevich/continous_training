describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(titleCase(''), '');
    Test.assertEquals(
      titleCase('a clash of KINGS', 'a an the of'),
      'A Clash of Kings'
    );
    Test.assertEquals(
      titleCase('THE WIND IN THE WILLOWS', 'The In'),
      'The Wind in the Willows'
    );
    Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox');
  });
});

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

describe('Data Reverse', function () {
  it('Example Tests', function () {
    const data1 = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
    ];
    const data2 = [
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ];
    Test.assertDeepEquals(dataReverse(data1), data2);
    const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
    const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
    Test.assertDeepEquals(dataReverse(data3), data4);
  });
});

function arrayDiff(a, b) {
  const result = [];
  a.map((current) => {
    if (!b.includes(current)) {
      result.push(current);
    }
  });
  return result;
}

describe('Sample tests', function () {
  it('Should pass Sample tests', function () {
    Test.assertDeepEquals(arrayDiff([], [4, 5]), [], 'a was [], b was [4,5]');
    Test.assertDeepEquals(
      arrayDiff([3, 4], [3]),
      [4],
      'a was [3,4], b was [3]'
    );
    Test.assertDeepEquals(
      arrayDiff([1, 8, 2], []),
      [1, 8, 2],
      'a was [1,8,2], b was []'
    );
    Test.assertDeepEquals(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      'a was [1,2,3], b was [1,2]'
    );
  });
});
