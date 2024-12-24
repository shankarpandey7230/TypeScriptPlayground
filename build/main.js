"use strict";
// // // let awesomeName: string = 'shakeAndBake';
// // // awesomeName = 'something';
// // // awesomeName = awesomeName.toUpperCase();
// // // // awesome = 2;
// // // console.log(awesomeName);
// // // let amount: number = 12;
// // // amount = 12 - 1;
// // // // amount = 'pants';
// // // let isAwesome: boolean = true;
// // // isAwesome = false;
// // // // isAwesome = 'shakeAndBake';
// // // Create a variable of type string and try to invoke a string method on it.
// // // Create a variable of type number and try to perform a mathematical operation on it.
// // // Create a variable of type boolean and try to perform a logical operation on it.
// // // Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// // // 1. String
// // let greeting: string = 'Hello TypeScript !';
// // greeting = greeting.toUpperCase();
// // // 2. Number
// // let age: number = 25;
// // age = age + 5;
// // // 3. Boolean
// // let isAdult: boolean = age >= 18;
// // isAdult = !isAdult;
// // let tax: number | string = 10;
// // tax = 10;
// // tax = '$10';
// // // fancy name - literal value type
// // let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// // requestStatus = 'success';
// // requestStatus = 'error';
// // // requestStatus = 'random';
// // let notSure: any = 4;
// // notSure = 'maybe a string instead';
// // notSure = false; // okay, definitely a boolean
// // // ## Practical Application Type Annotation
// // const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
// // let foundBook: string | undefined;
// // for (let book of books) {
// //   if (book === '1984') {
// //     foundBook = book;
// //     foundBook = foundBook.toUpperCase();
// //     break;
// //   }
// // }
// // console.log(foundBook?.length);
// // // arrays
// // let prices: number[] = [100, 75, 42];
// // // be careful [] means literally empty array
// // // let randomvalues: [] = [1];
// // let emptyvalues: number[] = [];
// // // be careful with inferred array types
// // // let names = ['peter', 'susan'];
// // let names = ['peter', 'susan', 1];
// // let array :(string | boolean)[]=['apple', true, 'orange']
// // // Challenges
// // let temperatures:number[] =[20,25,30];
// // // temperatures.push('hot');
// // let colors: string[] =['red', 'green', 'blue'];
// // // colors.push(true);
// // let mixedArray:(number |string) []=[1,'two', 3]
// // // Object Fundamentals
// // let car:{brand:string; year:number} ={brand:'toyota', year:2020};
// // car.brand ='ford';
// // // car.color = 'blue';
// // let car1:{brand:string; year:number} ={brand:'audi', year:2021};
// // let book={title:"book", cost:20}
// // let pen ={title:"pen", cost:10}
// // let notebook={title:"notebook"}
// // // let items:{title:string; cost:number}[] =[book, pen , notebook]
// // let items:{title:string; cost?:number}[] =[book, pen , notebook] // will work as well because of optional character
// // // let items:{title:string; cost:number}[] =[book, pen ]
// // // let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// // // items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property
// // // Challenges
// // // 1.Bike
// // let bike:{brand:string; year:number} ={brand:"yamaha", year:2010};
// // //  bike.year ='old'; // This will result in  TypeScript error
// //  // 2.Laptop
// // let laptop :{brand:string; year : number}= {brand:"Dell", year:2020};
// // // let laptop2:{brand:string, year:number}={brand:"HP"}  //This will result TypeScript error
// // // 3. Products
// // let product1 ={title:"shirt", price:20};
// // let product2 ={title:"shirt"};
// // let products:{title:string; price?:number}[]=[product1, product2]
// // products.push({title:'shoes'})
// // // Functions Params and Function Returns
// function sayHi(name:string){
//   console.log(`Hello there ${name.toUpperCase()} `)
// }
// sayHi('john')
// // sayHi('3')
// function calculateDiscount(price:number):number{
//   const hasDiscount = true;
//   if(hasDiscount){
//     // return 'Discount applied'
//     return price;
//   }
//   return price *0.9;
// }
// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);
// // 'any' example
// function addThree(number:any){
//   let anotherNumber:number = 3;
//   return number +anotherNumber;
// }
// // const result = addThree(2);
// // const someValue =result;
// // // run time error
// // someValue.myMethod()
// // CHALLENGES 
// const names:string[]=['John', 'Jane', 'Jim', 'Jill'];
// function isNameInList(name:string):boolean{
//   return names.includes(name);
// }
// let nameToCheck :string ='Jane';
// if(isNameInList(nameToCheck)){
//   console.log(`${nameToCheck} is in the list`)
// }
// else{
//   console.log(`${nameToCheck} is not in the list`)
// }
// // Optional, Default and Rest Parameters
// function calculatePrice(price:number, discount?:number):number{
//   return price-(discount || 0);
// }
// let priceAfterDiscount = calculatePrice(100, 200)
// let priceWithoutDiscount = calculatePrice(300);
// function calculateScore(initialScore:number, penaltyPoints:number=0){
// return initialScore -penaltyPoints;
//  }
//  let scoreAfterPenalty = calculateScore(100,20);
//  console.log(scoreAfterPenalty);
//  let scoreWithoutPenalty = calculateScore(300);
//  console.log(scoreWithoutPenalty); // Output: 300
//  // Rest Parameter
//  function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);
//   let total = numbers.reduce((previous, current) => {
//     return previous + current;
//   }, 0);
//   return `${message} ${total}`;
// }
// let result = sum('The total is:', 1, 2, 3, 4, 5); 
// function logMessage(message: string): void {
//   console.log(message);
// }
// logMessage('Hello, TypeScript!'); 
// function logMessage(message: string): void {
//   console.log(message);
//   // return 'This value is ignored';
// }
// logMessage('Hello, TypeScript!'); 
function processInput(input) {
}
processInput(10);
processInput('Hello');
