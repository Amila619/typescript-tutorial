let myName: string = "amila";
// Primitive Data Types: string, number, boolean

let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Custom Types
type Food = string;

let favouriteFood: Food = "pizza";

// Custom Types with objects
type Person = {
  name: string;
  age: number;
  isTeacher: boolean;
};

let person: Person = {
  name: "amila",
  age: 23,
  isTeacher: false,
};

// Nested Object Types
type Address = {
  street: string;
  city: string;
  country: string;
};

type Student = {
  name: string;
  age: number;
  address: Address;
};

let student: Student = {
  name: "John Doe",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Colombo",
    country: "Sri Lanka",
  },
};

// Optional Properties
type Animal = {
    name: string,
    canFly: boolean,
    family?: string
}

let cat: Animal = {
    name: "damian",
    canFly: false
}