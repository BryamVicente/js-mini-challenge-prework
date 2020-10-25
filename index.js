// ***** Question 1 *****

let counter = 1
counter = 2
console.log(counter) 

// ***** Question 2 *****

const name = "Bryam"
// name = "Not Bryam"
console.log(name)

// ***** Question 3 *****

const drinkWater = (currentThirstLevel) => {
  console.log('Man I sure am thirsty')
    currentThirstLevel -= 1 
  console.log('Ahh that hits the spot')
   return currentThirstLevel
}
console.log(drinkWater(10))

// ***** Question 4 *****

const sameSameButDifferent = (num, maybeNum) => {
  const parseNumber = parseInt(maybeNum)
  if(maybeNum === num){
    return 'same same'
  }else if(parseNumber === num){
    return 'same same (but different)'
  }else {
    return 'different'
   }
}

// uncomment these when done with BONUS question!!!

console.log(sameSameButDifferent(5, 5)) 
console.log(sameSameButDifferent(5, '5')) 
console.log(sameSameButDifferent(8, "7")) 

// ***** Question 5 *****

const updateGrade = (student, grade) => {
  student.grade = grade 
}

const student1 = {name: "Bryam", grade: 86}
updateGrade(student1, 90)
console.log(student1)

// ***** Question 6 *****

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
];

const printNameAndPhones = (users) => {
  for (const user of users) { 
    console.log(user.name)
    console.log(`Cell:"${user.phones.cell}`)
    console.log(`Office: ${user.phones.office}`)
  }
}
printNameAndPhones(users)

// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

const triple = (i) => {
  return i * 3 
}

console.log(myMap([1,2,3,4,5], triple)) 
console.log(myMap([2,4,6,8], triple)) 


// ***** Callbacks - Question 2 *****

const greet = (i) => {
  return `Hi ${i}!`
}

console.log(myMap(["Ian", "Chase"], greet)) 

// ***** Scope & Closures *****

// ***** Scope & Closures - Question 1 *****

const line = []
let number = 1

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const takeATicketNumber = (line) => {
  line.push(number)
  number++ 
  return ` Welcome. Your are ticket number ${line.length}`

}
// *** Uncomment the lines below to test
console.log(takeATicketNumber(line))
console.log(takeATicketNumber(line))
console.log(takeATicketNumber(line))


// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test

const ticketNumberGeneratorFunc = () => {

  let number = 1
  const takeATicketNumber = (line) => {
    line.push(number)
    number++ 
    return ` Welcome. Your are ticket number ${line.length}`
  }
  return takeATicketNumber
} 

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()


console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// // => `Currently serving 1.`

console.log(nowServing(newLine))
// // => `Currently serving 2.`
