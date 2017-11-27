// these are just example tests. they should both pass

const sum    = (a, b) => a + b;
const sumBad = (a, b) => a * b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 1 * 2 to not equal 3', () => {
  expect(sumBad(1, 2)).not.toBe(3);
});
