/**
 * Created by Mohit Kumar on 1/9/2018.
 */
'use strict'
var y= {}
y.a=10;
y.b=11;

//console.log(Object.keys(y));


var j = "123" + k;
var k = "456";

console.log(j);

var t = typeof null;

console.log(t)

var x = Array();
x["ABC"]="foo";
x["xyz"]="abc";

x[0]="test";
//
console.log(x.ABC);

//
console.log(x[1]);
//length of array
console.log(x.length);

// object keys


console.log("Object keys",+Object.keys(x))

// type of object
console.log(typeof(x));

for(var i in x){
    console.log(i);
}

/*
Way to create function using class in ES6
 */


class Person{

    constructor(name,age) {

        this.name = name;
        this.age = age;
    }
    Display(){
        console.log(this.name,this.age );
}
}

console.log("This is how to use class in ES6")
var personObject=new Person('mohit',33);
personObject.Display();

/*
You can change the property of Property of an Object.
You can use defineProperty to for get and set of Property.
You can create a new Property using defineProperty

Prototype is an object that exist on every function in Javascript.
Its an empty object..
Object doesn't have prototype object.


A function's prototype is the object instance that is attached with
every object that is created by that function as constructor.

An Object's prototype is the object instance from
which the object is inherited.

__proto__ is an instance of object created by
 function object.


 */

var cat ={name:'billu',age:12};

//Object.defineProperty(cat,'name',{configurable:false})
//Object.freeze(cat);
//console.log(cat);
//cat.name='pussy';
//console.log(cat.__proto__);

function dog(name,color) {

    this.name=name;
    this.color=color
}

var dog1= new dog("crazy","golden");

dog.prototype.age=3;


dog.prototype ={sex:'male'}; // new objects in memory

var dog2= new dog("bhola","ghehua");
console.log(dog1.__proto__.age);
console.log(dog2.__proto__.sex);


/*
 Creating own Prototype using class
*/

class Animal{
    constructor(voice){

        this.voice=voice || 'grunt';
    }

    Speak(){

        console.log(this.voice);
    }

}

class Cat extends Animal{
    constructor(name,color){

        super("meow"); // calls parent class constructor
        this.name=name;
        this.color=color;
    }

}

var cat1= new Cat('joe','white');
cat1.Speak();