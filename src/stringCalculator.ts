
export interface StringCalculator {
    add(numbers: string): number;
}


export class SimpleStringCalculator implements StringCalculator {

    add(numbers: string): number {
        if(numbers === "") return 0;
        return parseInt(numbers)
    }
  }