
export interface StringCalculator {
    add(numbers: string): number;
}


export class SimpleStringCalculator implements StringCalculator {

    add(numbers: string): number {
        if(numbers === "") return 0;
        //using regular expression of replacing all \n

        let delimiter: string = ","


        //      //;\n1;2"
        if(numbers.startsWith("//")){
            numbers = numbers.substring(2); 
            delimiter = numbers[0]
            if(numbers.includes("\n"))  numbers = numbers.replace(/\n/g, delimiter);
            numbers = numbers.replace(/^[^\d]*/, '');            
        }else{
            if(numbers.includes("\n"))  numbers = numbers.replace(/\n/g, delimiter);
        }
        
        const nums = numbers.split(delimiter);
        let negativeNumArr: number[] = [];

        nums.forEach((num: any) => {
            const number = parseInt(num);
            if(num < 0) negativeNumArr.push(num);
            
        });

        if(negativeNumArr.length > 0) throw new Error("array contains negative number");

        return nums.reduce((sumofNumbers, number) => sumofNumbers + parseInt(number), 0);
    }
  }