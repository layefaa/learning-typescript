// Type Alias
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employees: Employee = {
  id: 1,
  name: "James",
  retire: (date: Date) => {
    console.log(date)
  }
}

console.log(employees)


// Type Alias

//Union Type
function convertKgToPound(kg: number | string): number {
  if (typeof kg === "number") {
    return kg * 2.2;
  } else {
    return parseInt(kg) * 2.2
  }

}

convertKgToPound(30)
convertKgToPound('3kg')

//Union Type