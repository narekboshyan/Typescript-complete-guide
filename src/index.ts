// const a = 1 + 2;

// const b = a + 3;

// const c = {
//  apple: a,
//  banana: b,
// };

// const d = c.apple * 4;

// const squareOf = (num: number) => num * num;

// console.log(squareOf(4));
// console.log(squareOf(+"4"));

// ! Any type

// const a: any = 4;
// const b: any = [1, 2, 3];

// no errors because we set a to any and b to any so TS does not understand if it is number or array basically it does not check at all
// const c = a + b;

// ! unknown type

// *where you have a value whose type you really don’t know ahead of time, don’t use , and instead reach for . Like represents any value, but TypeScript won’t let you use an until you refine it by checking what it is
// * What operations does support? You can compare (with ==,=== ,&& ,|| , and ? ), negate them (with !), and refine them (like you can any other type) with JavaScript’s and instanceof operators. Use like this:

// const a: unknown = 30;
// const b = a === 123;
// const c = a + 10; //error 'a' is of type 'unknown'

// if (typeof a === "number") {
//  let d = a + 10;
// }

// ! boolean;

// const a = true;
// const b = false;
// const c = true;

// const d: boolean = true;
// const e: true = true;
// const f: true = false; //Error Type 'false' is not assignable to type 'true'.

// !number
/*
 * number is the set of all numbers: integers, floats, positives, negatives,infinity,NaN and so on.
 *Numbers can do, well, numbery things, like addition ( ), subtraction ( ), modulo ( ), and comparison ( ). Let’s look at a few examples:
 */

// const a = 1234;
// const b = Infinity * 0.1;
// const c = 5678;
// const e: number = 100;
// const f: 2678 = 2678;
// const g: 2678 = 10; //Type '10' is not assignable to type '2678'.

// !Bigint
/*
 * Bigint is a newcomer to JavaScript and TypeScript: it lets you work with large integers without running into rounding errors. While the type can only represent whole numbers up to 253, can represent integers bigger than that too. The type is the set of all BigInts, and supports things like addition ( + ), subtraction ( - ), multiplication (*), division ( / ), and comparison ( ==,=== ). Use it like this:
 */

// const a = 1234n;
// const b = 5678n;
// const c = a + b;
// const d = a < 12345;
// const e: bigint = 100n;
// const f: 100n = 100n;
// const g: 100n = 100; //Type '100' is not assignable to type '100n'.

// ! string
/*
 * string is the set of all strings and the things you can do with them like concatenate ( ), slice ( ), and so on. Let’s see some examples:
 */

// const a = "hello";
// const b = "billy";
// const c = "!";

// const d = a + " " + b + c;
// const e: string = "zoom";
// const f: "john" = "john";
// const g: "john" = "MaX"; //Type '"MaX"' is not assignable to type '"john"'.

// ! Symbol
/*
 * symbol is a relatively new language feature that arrived with one of the latest major JavaScript revisions (ES2015). Symbols don’t come up often in practice; they are used as an alternative to string keys in objects and maps, in places where you want to be extra sure that people are using the right well-known key and didn’t accidentally set the key—think setting a default iterator for your object (Symbol.iterator), or overriding at runtime whether or not your object is an instance of something
 */

// const a = Symbol("a");
// const b: symbol = Symbol("a");
// const c = a === b;
// const d = a + "x"; //Error The '+' operator cannot be applied to type 'symbol'.

/*
 *Similarly to how the value is inferred to be a when declared with let but the specific number when you declare it with const , symbols are inferred to be of type symbol but can be explicitly typed as unique symbol:
 */

// const e = Symbol("e");
// const f: unique symbol = Symbol("f");
// let g: unique symbol = Symbol("g"); //A variable whose type is a 'unique symbol' type must be 'const'.
// * but if we declare it with const there will be no error, a unique symbol is always equals to himself
// const h: unique symbol = Symbol("h");
// console.log(h === h);

// ! Objects

/*
 *TypeScript’s object types specify the shapes of objects. Notably, they can’t tell the difference between simple objects (like the kind you make with ) and more complicated ones (the kind you create with ). This is by design: JavaScript is generally structurally typed, so TypeScript favors that style of programming over a nominally typed style.
 */

/*
 *STRUCTURAL TYPING
 *A style of programming where you just care that an object has certain properties, and not what its name is (nominal typing). Also called duck typing in some languages (or, not judging a book by its cover).
 */

//  * There are a few ways to use types to describe objects in TypeScript. The first is to declare a value as an object:
// const a: object = {
//  b: "x",
// };

// * when we access b what we would get
// a.b; //Error Property 'b' does not exist on type 'object'.

// const b = {
//  b: "c",
// };

// b.b; //c

// *  when declaring variable with const and assign a primitive value to it  in TS, we tell typescript that its value is not gonna change becuase primitives declared with const  can not be changes so TS infers for us and set its type, it is not the same with let though
// const a: { b: number } = {
//  b: 10,
// };

// const c: {
//  firstName: string;
//  lastName: string;
// } = {
//  firstName: "John",
//  lastName: "Smith",
// };

// class Person {
//  constructor(public firstName: string, public lastName: string) {}
// }
// const d = new Person("Matt", "smith");

// * if we mutate the objects that we declared with types and field  what would happen let's check that out

// let a: { b: number };

// a = {}; // Property 'b' is missing in type '{}' but required in type '{ b: number; }'.

// a = {
//  b: 1,
//  c: 2,
// }; //  Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'. Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }'.

// * When you declare a variable in one place and initialize it later, TypeScript will make sure that your variable is definitely assigned a value by the time you use it:
// let a: {
//  b: number;
//  c?: string;
//  [key: number]: boolean;
// };

// 1). in this declared object above a has a property that’s a number
// 2). a variable might have a property that’s a string. And if is set, it might be undefined.
// 3). a might have any number of numeric properties that are booleans

// a = { b: 1 };
// a = { b: 1, c: undefined };
// a = { b: 1, c: "d" };
// a = { b: 1, 10: true };
// a = { b: 1, 10: true, 20: false };
// a = { 10: true }; //Property 'b' is missing in type '{ 10: true; }' but required in type '{ [key: number]: boolean; b: number; c?: string | undefined; }'.
// a = { b: 1, 33: "d" }; //Type 'string' is not assignable to type 'boolean'

//! Intermission: Type Aliases, Unions, and Intersections

//! Type aliases
// * Just like you can use variable declarations ( , , and ) to declare a variable that aliases a value, you can declare a type alias that points to a type. It looks like this:

// type Age = number;

// type Person = {
//  name: string;
//  age: Age;
// };

// * Like JavaScript variable declarations ( let,const , and var ), you can’t declare a type twice:
// type Color = "red";
// type Color = "blue"; //Duplicate identifier 'Color'.

// * And like and , type aliases are block-scoped. Every block and every function has its own scope, and inner type alias declarations shadow outer ones:
// type Color = "red";
// let x = Math.random() < 0.5;

// if (x) {
//  type Color = "blue"; //this shadows the Color declared above
//  let b: Color = "blue";
// } else {
//  let c: Color = "red";
// }

//! Union and intersection types
//* If you have two things A and B, the union of those things is their sum (everything in A or B or both), and the intersection is what they have in common (everything in both A and B  ).

// * TypeScript gives us special type operators to describe unions and intersections of types: | for union and & for intersection. Since types are a lot like sets, we can think of them in the same way:

// type Cat = {
//  name: string;
//  purrs: boolean;
// };

// type Dog = {
//  name: string;
//  barks: boolean;
//  wags: boolean;
// };

// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// Cat
// const cat: CatOrDogOrBoth = {
//  name: "Bonkers",
//  purrs: true,
// };

// Dog
// const dog: CatOrDogOrBoth = {
//  name: "Domino",
//  barks: true,
//  wags: true,
// };

// Both Cat and Dog
// const catAndDog: CatOrDogOrBoth = {
//  name: "Donkers",
//  barks: true,
//  purrs: true,
//  wags: true,
// };
// * Unions come up naturally a lot more often than intersections do. Take this function, for example:
// function trueOrNull(isTrue: boolean) {
//  if (isTrue) {
//   return "true";
//  }
//  return null;
// }
// //* What is the type of the value this function returns? Well, it might be a string, or it might be null. We can express its return type as:
// type Returns = string | null;

// ! Arrays
// * TypeScript arrays are special kinds of objects that support things like concatenation, pushing, searching, and slicing
// const a = [1, 2, 3]; //number[]
// const b = ["a", "b"]; //string[]
// const c = ["a", "b"]; //string[]
// const d = ["a", "b", 1]; //(string | number)[]
// const e = ["red"];
// // e.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string'.
// let f = []; //any
// f.push(1); //number[]
// f.push("red"); // (string | number)[]
// const g = [1, "a"];
// const h = g.map((el) => {
//  if (typeof el === "number") return el * 3;
//  return el.toUpperCase();
// });
// console.log(h, "ggggg");

// * When you initialize an empty array, TypeScript doesn’t know what type the array’s elements should be, so it gives you the benefit of the doubt and makes them any. As you manipulate the array and add elements to it, TypeScript starts to piece together your array’s type. Once your array leaves the scope it was defined in (for example, if you declared it in a function, then returned it), TypeScript will assign it a final type that can’t be expanded anymore:

// const buildArray = () => {
//  const a = []; // any[]
//  a.push(1); //number[]
//  a.push("x"); //(number |string)[]
//  return a;
// };

// const myArr = buildArray(); // (string |number)[]
// myArr.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

//! Tuples
//* Tuples are subtypes of array. They’re a special way to type arrays that have fixed lengths, where the values at each index have specific, known types. Unlike most other types, tuples have to be explicitly typed when you declare them. That’s because the JavaScript syntax is the same for tuples and arrays (both use square brackets), and TypeScript already has rules for inferring array types from square brackets:

// const a: [number] = [1];

// let b: [string, string, number] = ["malcom", "gladwell", 1963];

// b = ["queen", "elizabeth", "li", "1963"]; //Type 'string' is not assignable to type 'number'.

// * Tuples support optional elements too. Just like in object types, means “optional”:
// const trainFares: [number, number?][] = [[3.75], [8.25, 7.7]];

// * Tuples also support rest elements, which you can use to type tuples with minimum lengths:
// const friends: [string, ...string[]] = ["SARAH", "Tali", "Chloe", "Claire"];

// const list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

//! Read-only arrays and tuples
// *While regular arrays are mutable (meaning you can onto them,them, and update them in place), which is probably what you want most of the time, sometimes you want an immutable array—one that you can update to produce a new array, leaving the original unchanged. TypeScript comes with a readonly array type out of the box, which you can use to create immutable arrays. Read-only arrays are just like regular arrays, but you can’t update them in place. To create a read-only array, use an explicit type annotation; to update a read-only array, use non mutating methods like .concat and .slice instead of mutating ones like .push and .splice :
// const as: readonly number[] = [1, 2, 3]; //readonly number[]
// const bs: readonly number[] = as.concat(4); //readonly number[]

// const three = bs[2];
// as[4] = 5; //Index signature in type 'readonly number[]' only permits reading.
// as.push(6); //Property 'push' does not exist on type 'readonly number[]'

// *Like Array, Typescript comes with a couple of longer-form ways to declare read-only arrays and tuples
// type A = readonly string[];
// type B = ReadonlyArray<string>;
// type C = Readonly<string[]>;

// type D = readonly [number, string];
// type E = Readonly<[number, string]>;

//! null, undefined,void, and never
// *  JavaScript has two values to represent an absence of something: null and undefined . TypeScript supports both of these as values, and it also has types for them—any guess what they’re called? You got it, the types are called null and undefined too.

// *  void is the return type of a function that doesn’t explicitly return anything

// *  never is the type of a function that never returns at all (like a function that throws an exception, or one that runs forever):

//* function that returns a number or null
// const a = (x: number) => (x < 10 ? x : null);

//* a function that returns undefined
// const b = () => undefined;

//* a function that returns a void
// const c = () => {
//  const a = 2 + 2;
//  const b = a * a;
// };

// * a function that returns never
// const d = () => {
//  throw TypeError("i always error ");
// };

// * a function that returns never
// const e = () => {
//  while (true) {
//   // do something
//  }
// };

// ! Types that mean an absence of something

// * null  - Absence of a value
// * undefined  - Variable that has not been assigned a value yet
// * void  - Function that doesn’t have a statement
// * never  - Function that never returns

// !	enums
// *Enums are a way to enumerate the possible values for a type. They are unordered data structures that map keys to values. Think of them like objects where the keys are fixed at compile time, so TypeScript can check that the given key actually exists when you access it.

// * There are two kinds of enums: enums that map from strings to strings, and enums that map from strings to numbers. They look like this:
// enum Language {
//  English,
//  Spanish,
//  Russian,
// }

// *By convention, enum names are uppercase and singular. Their keys are also uppercase.

// * TypeScript will automatically infer a number as the value for each member of your enum, but you can also set values explicitly. Let’s make explicit what TypeScript inferred in the previous example:

// enum Language {
//  English = 0,
//  Spanish = 1,
//  Russian = 2,
// }

//  *To retrieve a value from an enum, you access it with either dot or bracket notation—just like you would to get a value from a regular object:

// const myFirstLanguage = Language.Russian;
// const mySecondLanguage = Language["English"];

//  *  You can split your enum across multiple declarations, and TypeScript will automatically merge them for you

// * Beware that when you do split your enum, TypeScript can only infer values for one of those declarations, so it’s good practice to explicitly assign a value to each enum member:

// enum Language {
//  English = 0,
//  Spanish = 1,
// }

// enum Language {
//  Russian = 2,
// }

//  * You can use computed values, and you don’t have to define all of them (TypeScript will do its best to infer what’s missing):

// enum Language {
//  English = 0,
//  Spanish = 1,
//  Russian,
// }

//  *  so now Language enum contains English,Russian,Spanish options it is merging all of them together
// const x: Language = Language.English;

// enum Color {
//  Red = "#c10000",
//  Blue = "#007ac1",
//  Pink = "0xc10050",
//  White = "255",
// }

// const red = Color.Red;
// const pink = Color.Pink;
// console.log(red, pink);

// * TypeScript lets you access enums both by value and by key for convenience, but this can get unsafe quickly:
// const a = Color.Red;
// const b = Color.Yellow; //Property 'Yellow' does not exist on type 'typeof Color'

//! Exercises
// * 1. For each of these values, what type will TypeScript infer?
// * What would be the output each of this code

// let a = 1042; // Number
// const b = "apples and oranges"; //string
// const c = "pineapples"; //string
// let d = [true, true, false]; //boolean[]
// let e = { type: "ficus" }; // { type:string }
// const f = [1, false]; // (number | boolean)[]
// const g = [3]; //number []
// const h = null; //null

// ! Functions

// ! Declaring and Invoking Functions

// const add = (a: number, b: number): number => a + b;

// function declaration
// function greet1(name: string) {
//  return "hello" + name;
// }

// function expression
// const greet2 = function (name: string) {
//  return "hello" + name;
// };

// arrow function
// const greet3 = (name: string) => "hello" + name;

// const greet4 = new Function("name", "return 'hello ' + name");

// console.log(greet4("Smith"));

// function log(message: string, userId?: string) {
//  const time = new Date().toLocaleTimeString();
//  console.log(time, message, userId || "Not signed in");
// }

// log("Page loaded");
// log("User signed in", "_12345");

// function logging(message: string, userId = "Not signed in") {
//  const time = new Date().toISOString();
//  console.log(time, message, userId);
// }

// logging("User signed in", "_12345");
// logging("Page loaded");

// type Context = {
//  appId?: string;
//  userId?: string;
// };

// function logging(message: string, context: Context) {
//  const time = new Date().toISOString();
//  console.log(time, message, context.userId);
// }

// function sum(numbers: number[]): number {
//  return numbers.reduce((total, n) => total + n, 0);
// }

// sum([1, 2, 3]);

// function sumVariadic(...numbers: number[]): number {
//  return Array.from(arguments).reduce((total, n) => total + n, 0);
// }

// sumVariadic(1, 2, 3);

// interface Console {
//  log(message?: any, ...optionalParams: any[]): void;
// }

//! call, apply, and bind
//* In addition to invoking a function with parentheses , JavaScript supports at least two other ways to call a function. Take from earlier in the chapter:

// function add(a: number, b: number): number {
//  return a + b;
// }

// add(10, 20);

// add.apply(null, [10, 20]);
// add.call(null, 10, 20);
// add.bind(null, 10, 20)();

// const x = {
//  a() {
//   return this;
//  },
// };

// console.log(x.a());

// const a = x.a;
// console.log(a());

// * 'this' implicitly has type 'any' because it does not have a type annotation.
// function fancyDate() {
//  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear}`;
// }

// fancyDate.call(new Date());

// function fancyDate(this: Date) {
//  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear}`;
// }

// fancyDate.call(new Date());

// fancyDate(); //* The 'this' context of type 'void' is not assignable to method's 'this' of type 'Date'.

function sum(a: number, b: number): number {
 return a + b;
}
