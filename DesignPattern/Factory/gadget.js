import Laptop from './laptop.js';
import Tablet from './tablet.js';

const Factory = { Laptop, Tablet };
console.log(Factory)

class Gadget {
    constructor(type, attributes) {
        return new Factory[type](attributes)
    }
}
export default Gadget