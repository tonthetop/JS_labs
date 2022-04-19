import Gadget from './gadget.js'
const myLaptop = new Gadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "MacBook Pro"
});
const myTablet = new Gadget("Tablet", {
    ram: 4,
    hdd: 128,
    name: "iPad",
    network: '4G'
});
console.log(myLaptop);
console.log(myTablet);