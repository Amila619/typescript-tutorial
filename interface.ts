// Type vs Interface
/*
Type aliases and interfaces are very similar, 
and in many cases you can choose between them freely,
*/ 

// intersection
type TUserProps = {
    name: string;
    regNumber: string;
    age: number;
} 

type TAdminProps = TUserProps & {
    role: string;
}

// extending
interface IUserProps {
    name: string;
    regNumber: string;
    age: number;
}

interface IAdminProps extends IUserProps {
    role: string;
}



/*
interface can only describe object - tupe alias can
describe object and everything else (eg: primitives 
such as string, number, boolean)

type alias can also descriobe union types

type alias can easily use utility types - interface
can too but only with ungly syntax

type alias can easily describe tupes - interface can too
but only with ugly syntax


*/ 



// utility types
type CardProps = {
    title: string;
    desc: string;
    createdAt: Date;
}

// type alias
type TNewCardProps = Omit<CardProps, "createdAt" | "desc">

// interface
interface INewCardProps extends Omit<CardProps, "createdAt" | "desc">{}


// tuples
// type alias
type TAddress = [number, string]

// interface
interface IAddress extends Array<number | string>{
    0: number;
    1: string;
}

const address_01: TAddress = [2, "main st"]
const address_02: IAddress = [3, "new st"];


// extracting type from something else
const project = {
    title: "Project 1",
    secification: {
        areaSize: 100,
        rooms: 3
    }
}

// type alias
type Specification = typeof project.secification


// interfaces can be merged
// "interfaces are open" and "type aliases are closed"
interface Bird{
    wings:number;
}

interface Bird{
    color: string;
}

let bird_01: Bird = {
    wings: 2,
    color: "green"
}


// type aliases can be used for classes too
interface IVehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

type TVehicle = {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// class Car implements IVehicle {
class Car implements TVehicle{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.make} ${this.model} started.`);
    }
}


/*
Interfaces provide more shorter, consice error messages

Interfaces were faster in the past, these days types aliases
and interfaces does not show significance difference
*/