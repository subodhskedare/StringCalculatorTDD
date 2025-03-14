import { SimpleStringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  let calculator: SimpleStringCalculator;

  beforeEach(() => {
    calculator = new SimpleStringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});