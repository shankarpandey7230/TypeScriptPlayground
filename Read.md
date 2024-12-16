## Type Annotations

TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

```ts
let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

console.log(awesomeName);

let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';
```

## Union Type:

In typeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can als be used to specify that a variable can hold one of several specific values.

```ts
let tax: number | string = 10;
tax = 100;
tax = '$10';

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';
```

## Type - "any"

In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing us to opt-out of type-checking and let the value pass through compile-time checks. It means a variable declared with the any type can hold a value of any type.

```
let notSure:any = 4;
notSure = "may be a string instead";
notSure = false;
```

## Practical Application of Type Annotation

```
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook :string | undefined;
for (let book of books){
if('book'==='1984' ){
foundBook= book;
foundBook = foundBook.toUpperCase();
break;

    }

}
console.log(foundBook?.length)
```

The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code(including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps bugs related to undefined values.

###Arrays -Fundamentals
In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.

```
let prices: number[] = [100,75,42];
let fruit:string[]= ['apple', 'orange'];
```