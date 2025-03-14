
export interface StringCalculator {
    add(numbers: string): number;
}


export class SimpleStringCalculator implements StringCalculator {

    add(numbers: string): number {
        if(numbers === "") return 0;
        console.log(numbers.includes("\n"))
        //using regular expression of replacing all \n
        if(numbers.includes("\n")){
            numbers = numbers.replace(/\n/g, ",")
        }
        console.log(numbers);
        
        const nums = numbers.split(",");
        return nums.reduce((sumofNumbers, number) => sumofNumbers + parseInt(number), 0);
    }
  }