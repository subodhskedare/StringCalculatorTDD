
export interface StringCalculator {
    add(numbers: string): number;
}


export class SimpleStringCalculator implements StringCalculator {

    add(numbers: string): number {
        if(numbers === "") return 0;
        const nums = numbers.split(",");
        return nums.reduce((sumofNumbers, number) => sumofNumbers + parseInt(number), 0);
    }
  }