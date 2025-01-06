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

// function processInput(input:string |number){
//     console.log(input *2);

// }
// function processInput(input: string | number) {
//     if (typeof input === 'number') {
//       console.log(input * 2);
//     } else {
//       console.log(input.toUpperCase());
//     }
//   }

// processInput(10);
// processInput('Hello');

// function createEmployee({id}:{id:number}):{id:number; isActive:boolean}{
//     return {id, isActive: id % 2 === 0}
// };

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first,second)

// //alternative
// function createStudent(student:{id:number; name:string}){
//     console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);

//   }
//   const newStudent = {
//     id:5,
//     name:'ana',
//   };
//   createStudent(newStudent);

// Gotcha - Excess Property Checks
// function createStudent(student:{id:number; name:string}){
//     console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
//   }
//   const newStudent = {
//     id:5,
//     name:'anna',
//     email:'anna@gmail.com',

//   };

//   createStudent(newStudent);
//   createStudent({id:1, name:'shankar'}); // will have error if we add the properties

// Challenges
// function processData(
//     input :string |number,
//     config:{reverse:boolean} = {reverse:false}
// ):string|number{
//     if (typeof input === 'number'){
//         return input *input;
//     }
//     else{
//         return  config.reverse ? input.toUpperCase().split('').reverse().join(''):input.toUpperCase();

//     }
// }
// console.log(processData(10)); // output 100
// console.log(processData('Hello')); // output:HELLo
// console.log(processData(`Hello`, {reverse:true})) //

// const john: { id: number; name: string; isActive: boolean } = {
//     id: 1,
//     name: 'john',
//     isActive: true,
//   };
//   const susan: { id: number; name: string; isActive: boolean } = {
//     id: 1,
//     name: 'susan',
//     isActive: false,
//   };

//   function createUser(user: { id: number; name: string; isActive: boolean }): {
//     id: number;
//     name: string;
//     isActive: boolean;
//   } {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//     return user;
//   }

//   type User ={id:number; name:string; isActive:boolean};

//   const john:User ={
//     id:1,
//     name:'john',
//     isActive:true,

//   };
//   const susan :User ={
//     id:1,
//     name:'susan',
//     isActive:false,
//   }
//   function createUser(user:User):User{

//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//     return user;
//   }

//   type StringOrNumber = string | number ;  // type alias for string |number
//   let value :StringOrNumber;
//   value='hello'; //This is valid
//   value =123;   //this is valid
//   type Theme = 'light' | 'dark';

//   let theme:Theme;
//   theme ='light'; //This is valid
//   theme ='dark'; // This is valid

// //   Function that accepts the Theme type alias
// function setTheme(t:Theme){
//     theme = t;

// }
// setTheme('dark');  //This will set the theme to 'dark'

// type Employee = {id:number; name:string; department:string};
// type Manager = {id:number; name:string; employees:Employee[]};
// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff) {
//     if ('employees' in staff) {
//       console.log(
//         `${staff.name} is a manager of ${staff.employees.length} employees.`
//       );
//     } else {
//       console.log(
//         `${staff.name} is an employee in the ${staff.department} department.`
//       );
//     }
//   }

//   const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
//   const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
//   const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

//   printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
//   printStaffDetails(bob);

// Intersection Types

// type Book ={id:number; name:string; price:number};
// type DiscountedBook = Book & {discount:number};
// const book1:Book ={
//     id:2,
//     name:'How to cook a Dragon',
//     price:15,
// };

// const book2:Book ={
//     id:3,
//     name:'The Secret Life of Unicorns',
//     price:18,
// };

// const DiscountedBook:DiscountedBook ={
//     id:4,
//     name:'Gonessafa',
//     price:25,
//     discount: 0.15,

// }

// // Type Alias- Computed Properties

// const propName ='age';
// type Animal ={
//     [propName]:number;

// };

// let tiger:Animal ={[propName]:5};

// Interface

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',
// };

// deepWork.title = 'New Title'; //allowed

// deepwork.isbn = 654321; //not allowed

// Interface method
// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };
// deepWork.printAuthor();
// const result = deepWork.printTitle('is an awesome book');
// console.log(result);

// Interface - Methods (more options)

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
//   //   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 9876543210,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',

//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
//   //   // first option
//   //   printSomething: function (someValue) {
//   //     return someValue;
//   //   },
//   //Second Option
//   //   printSomething: (someValue) => {
//   //     //"this" gotcha
//   //     console.log(deepWork.author);
//   //     return someValue;
//   //   },
//   // third option
//   //   printSomething(someValue) {
//   //     return someValue;
//   //   },
//   // alternate
//   //   printAuthor: () => {
//   //     console.log(deepWork.author);
//   //   },
// };
// // console.log(deepWork.printSomething(34));

// deepWork.printAuthor();
// const result = deepWork.printTitle('is an awesome book');
// console.log(result);

// // challenge

// interface Computer {
//   readonly id: number; // can not be changed once initialized
//   brand: string;
//   ram: number;
//   upgradeRam(increase: number): number;
//   storage?: number; //optional property
// }

// const laptop: Computer = {
//   id: 1,
//   brand: 'random brand',
//   ram: 8,
//   upgradeRam(amount: number) {
//     this.ram += amount;
//     return this.ram;
//   },
// };
// laptop.storage = 256; // assigning value to optional property
// console.log(laptop.upgradeRam(4));
// console.log(laptop);

// Interface- Mergin, Extend, TypeGuard

// interface Person {
//   name: string;
//   getDetails(): string;
// }
// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }
// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'john',
//   age: 30,
//   getDetails() {
//     return `name:${this.name}, age:${this.age}`;
//   },
// };
// interface Employee extends Person{
//   employeeId:number;
// }

// const employee: Employee = {
//   name: 'jane',
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };
// console.log(employee.getDetails());

// // Interface multiple inheritance

// interface Manager extends Person, DogOwner{
//   managePeople():void;

// }

// const manager :Manager={
//   name:'Bob',
//   age:35,
//   dogName:"Rex",
//   getDetails(){
//     return `Name: ${this.name}, Age:${this.age}`;

//   },

//   getDogDetails(){
//     return `Dog Name: ${this.dogName}`;

//   },
//   managePeople(){
//     console.log('Managing people ...')
//   }
// }

// Challenges
// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: 'john',
//     };
//   } else if (random < 0.66) {
//     return {
//       name: 'sarah',
//       dogName: 'Rex',
//     };
//   } else {
//     return {
//       name: 'bob',
//       managePeople: () => console.log('Managing people...'),
//       delegateTasks: () => console.log('Delegating tasks...'),
//     };
//   }
// }

// // challenge 2

// function  isManager (obj:Person | DogOwner | Manager):obj is Manager{
//   return 'managePeople' in obj
// };
// // console.log(isManager(employee))
// if(isManager(employee)){
//   employee.delegateTasks()
// }

// let person: [string, number] = ['john', 25];
// let date: readonly [number, number, number] = [12, 2, 4];

// // date.push(34);it wont work as it is readonly

// function getPerson(): [string, number] {
//   return ['john', 25];
// }
// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);

// let susan ;[string, number?]=['susan'];

// enum ServerResponseStatus {
//   Success = 200,
//   Error = 'Error',
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ['first item', 'second item'],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// Enums - Gotcha :Reverse Mapping

// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   console.log(value);
// });

// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });

// enum NumericEnum {
//   Member = 1,
// }

// enum StringEnum {
//   Member = 'Value',
// }

// let numericEnumValue: NumericEnum = 1; // This is allowed
// console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = 'Value'; // This is not allowed

// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }

// function getServerResponse(): ServerResponse {
//   return {
//     // result: ServerResponseStatus.Success,
//     // this will not fly with string enum but ok with number
//     result: 'Success',
//     data: ['first item', 'second item'],
//   };
// }

// Challenge
// Define an enum named userRole
//

// let someValue: any = 'this is a string';

// let strLength: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name: string;
//   status: Status;
// };

// const statusValue = 'pending';

// const user: User = { name: 'john', status: statusValue as Status };
