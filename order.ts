type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza : Pizza,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    {id: 1, name: "Margherite", price: 8 },
    {id: 2, name: "Pepperoni", price: 10 },
    {id: 3, name: "Vegetarian", price: 9 },
    {id: 4, name: "Hawaiian", price: 11 },
    {id: 5, name: "BBQ Chicken", price: 12 },
];

let cashInRegister = 100;
const orderQueue: Order[] = []
let nextOrderId = 0;

const showMenu = (): void =>  menu.forEach( p => console.log(`name : ${p.name} price : ${p.price}`) )

const addNewPizza = (pizza: Omit<Pizza, "id">): void => {
    menu.push({
        id: menu.length++,
        ...pizza
    })
}

const placeOrder = (pizzaName: string): Order | undefined => {
    const selectedPizza: Pizza | undefined = menu.find(p => p.name == pizzaName); 
    
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return
    }
    
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {
        id: nextOrderId,
        pizza : selectedPizza,
        status: "ordered"  
    } 
    orderQueue.push(newOrder);
    nextOrderId++;

    return newOrder
}

const completeOrder = (orderId: number): Order | undefined => {
    const selectedOrder: Order | undefined = orderQueue.find(o => o.id === orderId);

    if (!selectedOrder) {
        console.error(`${orderId} does not exist in the orders`);
        return
    }

    selectedOrder.status = "completed";
    return selectedOrder

}

// Be explicit when ever you can
const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
    if (typeof identifier == "string") {
        return menu.find(p => p.name === identifier);
    }else if (typeof identifier == "number") {
        return menu.find(p => p.id === identifier);
    }else{
        throw new TypeError("Parameter 'identifier' must be either a string or a number");
    }
}

addNewPizza({name: "Four Cheese", price: 13 });
addNewPizza({name: "Buffalo", price: 14 });
addNewPizza({name: "Spinach", price: 10 });

placeOrder("Spinach");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);