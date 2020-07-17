import { sum, sumAny } from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds n values', () => {
  var values:number[] = [1,2,3];
  expect(sumAny(values)).toBe(6);
});