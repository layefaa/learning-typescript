// Data Types
let sales: number = 100_000_000
let person: string = "james"
let is_published = false

// any type
let level: any;
// any type

// Array
let arr: number[] = [1, 2, 3]
let newArr = [1, 2, '3']
let newArr2: any[] = []
// Array

//Tuples
let person_tuples: [number, string] = [2, "james"]
//Tuples

//enums
const enum Size {
  Small = 1,
  Medium,
  Large
}

let mySize: Size = Size.Small

//enums

//functions
function CalculateTax(income: number, taxYear = 2022): number {
  if (taxYear > 2022)
    return income * 1.3
  return income * 1.2
}

CalculateTax(50_000)

//functions

// objects
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
} = {
  id: 1,
  name: "James",
  retire: (date: Date) => {
    console.log(date)
  }
}

// objects


// Data Types
