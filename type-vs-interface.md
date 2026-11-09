Differences between type aliases and interface in TypeScript:

In TypeScript, both type aliases and interface help us define the structure of data. They allow us to describe what properties and methods an object should have.

Interdace is generally connected to object. One advantage of  interface if an interface uses extends to inherit properties from another interface. 

Example: 

interface Employee {
    name: string;
}

interface Manager extends Employee {
    salary: number;
}


One important difference is that interfaces support declaration merging. If we declare the same interface twice, TypeScript combines their properties.

Example: 

interface User {
    name: string;
}

interface User {
    age: number;
}

Now User contains both name and age. Type aliases do not support this kind of merging.


Type alias is more connected to literals, unions, tuples, primitives while innterfaces are mainly designed for describing object structures and contracts.

Example:

type Status = "active" | "inactive";

type ID = string | number;

Both type and interface are useful in TypeScript. While defining object structures interface is needed, especially when declaration merging or extension is needed. Type alias is more flexible when working with unions, tuples, primitive types, or more complex type combinations.

