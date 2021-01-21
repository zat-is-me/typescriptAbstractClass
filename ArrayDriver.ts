import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';


let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(0,0,3,7);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let iterator of theShapes) {
    console.log(iterator.getInfo());
    console.log("Area = " +iterator.calculateArea())
    console.log();
}
