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

    //test 3
    test("will return the sum of all the number ", () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

     //test 4
     test("will replace /n with ,", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });
});