type Pizza = {
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza : Pizza,
    status: string 
}

const menu: Pizza[] = [
    { name: "Margherite", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Vegetarian", price: 9 },
    { name: "Hawaiian", price: 11 },
    { name: "BBQ Chicken", price: 12 },
];

let cashInRegister = 100;
const orderQueue: Order[] = []
let nextOrderId = 0;

const showMenu = () =>  menu.forEach( p => console.log(`name : ${p.name} price : ${p.price}`) )

const addNewPizza = (pizza: Pizza) => {
    menu.push(pizza)
}

const placeOrder = (pizzaName: string) => {
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

const completeOrder = (orderId: number) => {
    const selectedOrder: Order | undefined = orderQueue.find(o => o.id === orderId);

    if (!selectedOrder) {
        console.error(`${orderId} does not exist in the orders`);
        return
    }
    

    selectedOrder.status = "completed";

    return selectedOrder

}

addNewPizza({ name: "Four Cheese", price: 13 });
addNewPizza({ name: "Buffalo", price: 14 });
addNewPizza({ name: "Spinach", price: 10 });

placeOrder("Spinach");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);