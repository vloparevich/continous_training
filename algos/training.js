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
