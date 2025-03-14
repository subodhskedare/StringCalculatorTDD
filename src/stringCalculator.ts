
export interface StringCalculator {
    add(numbers: string): number;
}


export class SimpleStringCalculator implements StringCalculator {
    add(numbers: string): number {
      return 0;
    }
  }