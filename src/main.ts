// let awesomeName: string = 'shakeAndBake';
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();
// // awesome = 2;
// console.log(awesomeName);

// let amount: number = 12;
// amount = 12 - 1;
// // amount = 'pants';

// let isAwesome: boolean = true;
// isAwesome = false;
// // isAwesome = 'shakeAndBake';

// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.

// 1. String

let greeting: string = 'Hello TypeScript !';
greeting = greeting.toUpperCase();

// 2. Number

let age: number = 25;
age = age + 5;

// 3. Boolean

let isAdult: boolean = age >= 18;
isAdult = !isAdult;

let tax: number | string = 10;
tax = 10;
tax = '$10';

// fancy name - literal value type

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';

// requestStatus = 'random';

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// ## Practical Application Type Annotation

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// arrays

let prices: number[] = [100, 75, 42];

// be careful [] means literally empty array
// let randomvalues: [] = [1];
let emptyvalues: number[] = [];

// be careful with inferred array types
// let names = ['peter', 'susan'];
let names = ['peter', 'susan', 1];
let array :(string | boolean)[]=['apple', true, 'orange']



// Challenges


let temperatures:number[] =[20,25,30];
// temperatures.push('hot');
let colors: string[] =['red', 'green', 'blue'];
// colors.push(true);

let mixedArray:(number |string) []=[1,'two', 3]




// Object Fundamentals


let car:{brand:string; year:number} ={brand:'toyota', year:2020};

car.brand ='ford';
// car.color = 'blue';




let car1:{brand:string; year:number} ={brand:'audi', year:2021};


let book={title:"book", cost:20}
let pen ={title:"pen", cost:10}
let notebook={title:"notebook"}



// let items:{title:string; cost:number}[] =[book, pen , notebook]


let items:{title:string; cost?:number}[] =[book, pen , notebook] // will work as well because of optional character

let items:{title:string; cost:number}[] =[book, pen ]//will work 


let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property


