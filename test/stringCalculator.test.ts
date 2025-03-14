import { SimpleStringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  let calculator: SimpleStringCalculator;

  //create a new calculator cariable before each test
  beforeEach(() => {
    calculator = new SimpleStringCalculator();
  });

    //test 1 
    test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
    });

    //test 2 
    test("will return the number if it is a single digit/string", () => {
        expect(calculator.add("1")).toBe(1);
    });
});