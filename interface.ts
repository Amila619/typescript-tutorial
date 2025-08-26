// Type vs Interface
/*
Type aliases and interfaces are very similar, 
and in many cases you can choose between them freely,
*/ 

// intersection
type TUserProps = {
    name: string,
    regNumber: string,
    age: number
} 

type TAdminProps = TUserProps & {
    role: string   
}

// extending
interface IUserProps {
    name: string,
    regNumber: string,
    age: number
}

interface IAdminProps extends IUserProps {
    role: string
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

