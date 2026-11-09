Generics in TypeScript and their Role while working with asynchronous Promise<T> responses?

Generics are a powerful feature in TypeScript that allow us to write reusable and flexible code. Instead of specifying one fixed data type, we can use a placeholder type that adapts depending on the value provided. Generics are especially useful when working with asynchronous operations and Promise<T> because they help TypeScript understand what type of data a Promise will eventually return.


How Generics work in TypeScript:

Generic is defined using angle brackets(<T>). Here, T represents a type that Typescript determines when the funtion is called.

Examples:

const getValue = <T>(value: T): T => {
    return value;
};

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));

The same function works with different data types without losing type safety.


Generics in Promise:

A Promise represents a value that may become available in the future. Promise<T> tells TypeScript what type of value the Promise will return when it succeeds.

Examples: 

const getUser = (): Promise<string> => {
    return new Promise((resolve) => {
        resolve("Alice");
    });
};

getUser().then((result) => {
    console.log(result);
});

Here, Promise<string> means the resolved value will be a string.

We can make asynchronous functions reusable by using generics. 

Examples:

const fetchData = <T>(data: T): Promise<T> => {
    return Promise.resolve(data);
};

fetchData<string>("Hello").then((result) => {
    console.log(result);
});

fetchData<number>(200).then((result) => {
    console.log(result);
});

The function adapts to different data types while preserving type safety.

In conclusion, Generics help us create reusable functions without sacrificing type safety. When combined with Promise<T>, they make asynchronous code easier to understand and maintain. They are particularly useful when building APIs, fetching user data, and handling different response types in real-world applications.