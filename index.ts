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

let person_01: Person = {
  name: "amila",
  age: 23,
  isTeacher: false,
};

let person_02: Person = {
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
  name: string;
  canFly: boolean;
  family?: string;
};

let cat: Animal = {
  name: "damian",
  canFly: false,
};


// Custom Types with Arrays
let ages: number[] = [23, 42];
let people: Person[] = [person_01, person_02];
let people_: Array<Person> = [person_01, person_02];


// Literal Types
/*
Types that represent specific, exact values (e.g., "ordered", 42, true) 
instead of general types like string or number. They restrict variables 
to those exact values, often used with unions (e.g., "ordered" | "completed") to enforce type safety.
*/
// hover the mouse pointer on the variable
let name_01 = "Bob";
const name_02 = "Bob";
// let nameCheck: "Bob" = name_01; Type string is not assignable toType "Bob"
let nameCheck_: "Bob" = name_02;

// Unions
type UserRole = "Admin" | "User"; // lliteral Types
let user_01: UserRole = "Admin";

type User = {
  userName: string;
  type: UserRole;
};

const user_02: User = {
  userName: "Liam",
  type: "User",
};


// Type Narrowing
type Id = string | number;
const id_01: Id = 1;
const id_02: Id = "p001";


// Function return Types
type TaskPriority = "low" | "medium" | "high";
type TaskStatus = "pending" | "in-progress" | "done";

type Task = {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
};

const tasks: Task[] = [
  { id: 0, title: "Write report", priority: "high", status: "pending" },
  { id: 1, title: "Review code", priority: "medium", status: "in-progress" },
  { id: 2, title: "Send email", priority: "low", status: "done" },
];

const findTask = (id: number): Task => {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error(`Task with ${id} not found`);
  }

  return task;
};


// any Type => Turns of typescript checking for that variable
/*
let value = 1
value.toUpperCase() 

typescript identifies the type and implements type checking
*/ 
let anyData: any;
anyData = 10;
anyData = false;
anyData = "Data";


// unknown Type
/*
 unknown Type => requires you to perform type narrowing 
 or assertions before using the value, making it safer 
 for handling values whose type is not known at compile time.
*/ 
let value: unknown = 42; // Can assign any value
value = "hello";
value = { id: 1 };

// Error: Object is of type 'unknown'
// console.log(value.length); // TypeScript error: Property 'length' does not exist on type 'unknown'

// Type narrowing is required
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Now safe, narrowed to string
} else {
    console.log("Not a string");
}


// void return Type
const printName = (): void => {
    console.log("amila");
}


// Utility Types and Partial
/* 
Utility => Like a function, they take other types in as a parameter and
return a new type, with some changes made to it. Use "Generics"
syntax modifications to existing types. 
 
Partial Type => This modifies the type you pass in and 
turns all properties into optional properties.
*/ 

type Book = {
    id: number;
    title: string;
    genre: "fiction" | "non-fiction" | "mystery" | "biography";
};

type updateBook = Partial<Book>

const books: Book[] = [
    { id: 1, title: "The Great Gatsby", genre: "fiction" },
    { id: 2, title: "Sapiens", genre: "non-fiction" },
    { id: 3, title: "The Da Vinci Code", genre: "mystery" },
    { id: 4, title: "Steve Jobs", genre: "biography" }
];

function updateBook(id: number, updates: updateBook): void {
    let selectedBook: Book | undefined = books.find(b => b.id === id);
    
    if (!selectedBook) {
        throw Error(`Book with id : ${id} not found`)
    }

    Object.assign(selectedBook, updates)

}

// Example updates
updateBook(1, { title: "The Great Gatsby (Revised)" });
updateBook(4, { genre: "non-fiction" });


// Omit Utility Type
/*
Omit takes in a type AND a string (or union of strings)
property name(s), and returns a new type with those
properties removed.

Omit<Book, "id" | title> 
{
  genre: "fiction" | "non-fiction" | "mystery" | "biography";
}
*/ 

function addNewBook(newBook: Omit<Book, "id">): Book{
  const book = {
    id: books.length++,
    ... newBook
  }
  books.push(book);

  return book;
}


addNewBook({ title: "Atomic Habits", genre: "non-fiction" });


// Generics
// Act like function parameters, but for types
const gameScores = [14, 21, 33, 42, 59];
const favouriteThings = [
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
  "brown paper packages tied up with strings"
];
const voters = [
  {
    name: "Alice",
    age: 30
  },
  {
    name: "Bob",
    age: 45
  },
  {
    name: "Charlie",
    age: 22
  }
]

function getLastItem<T>(array: T[]): T | undefined{
  return array[array.length - 1]
}

getLastItem(gameScores);
getLastItem(favouriteThings);
getLastItem(voters);


// Using Generics
function addToArray<T>(array: T[], item: T): T | undefined {
  array.push(item)
  return item
}

const addToArray_ = <T,>(array: T[], item: T): T | undefined => {
  array.push(item)
  return item
};


// Explicitly Type generic function calls
type Voter = {
  name: string,
  age: number
}

addToArray<Voter>(voters, {
    name: "Diaz",
    age: 24
})