const sum = require('./sum');

test('test1', () => {
  expect(sum(100, 120)).toBe("General");
});
test('test2', () => {
  expect(sum(110, 120)).toBe("Risk");
});
test('test3', () => {
  expect(sum(127, 140)).toBe("High Risk level 1")  ;
});
test('test4', () => {
  expect(sum(155, 165)).toBe("High Risk level 2");
});
test('test5', () => {
  expect(sum(190, 180)).toBe("High Risk level 3");
});
