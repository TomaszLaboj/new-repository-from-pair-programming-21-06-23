import { calucalateAverage } from "./return-average";

test("returns average of 0 and 10", () => {
  expect(calucalateAverage([0, 10])).toBe(5);
});
test("returns average of 8 and 10", () => {
  expect(calucalateAverage([8, 10])).toBe(9);
});
test("returns average of -5 and 5", () => {
  expect(calucalateAverage([-5, 5])).toBe(0);
});
test("returns average of empty array", () => {
  expect(calucalateAverage([])).toBe(NaN);
});
test("returns average of empty array", () => {
  expect(calucalateAverage([0, 100])).toBe(50);
});
