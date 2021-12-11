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
