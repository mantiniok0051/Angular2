interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
let anotherObj = {size:12, label:"This is another object" };
printLabel(anotherObj);


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
	console.log(mySquare.color+" "+mySquare.area);
	mySquare = createSquare({width: 3.1416});
	console.log(mySquare.color+" "+mySquare.area);



//Protección de datos
	interface Point {
    readonly roX: number;
    readonly roY: number;
}
let p1: Point = { roX: 10, roY: 20 };
	console.log(p1);

//Interfaces con propiedades opcionales y listado extensible
	interface storeItemConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

//Interfaces para funciones
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

//Interfaces indexables
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
	console.log(myStr);