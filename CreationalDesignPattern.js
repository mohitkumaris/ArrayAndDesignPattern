/**
 * Created by Mohit Kumar on 1/9/2018.
 */
// Creational Design Patterns
/*
Factory Design Pattern
1. Creates diffrent object based on need.   
2. Create an Object with some properties
3. As it creates a factory for multiple instantiation
4
 */
'use strict'
var peopleFactory=function (name,age,state) {

    var temp={};

    temp.name=this.name;
    temp.age=this.age;
    temp.state=this.state;

    temp.PrintTemp=function () {

        console.log(name + ',' + age + ',' + state);
    };

    return  temp;
};


//var People1= peopleFactory('Mohit',33,'delhi');
//People1.PrintTemp();


/*
Constructor Design Pattern
1. Function act as an Object
2. No need to  create an Object inside the function
 */

var peopleConstructor=function (name,age,state) {

    this.name=name;
    this.age=age;
    this.state=state;

    this.PrintPeople=function () {

        console.log(this.name + ',' + this.age + ',' + this.state);
    };

};

console.log("Constructor Design Pattern Starts here");
var peopleObject=new peopleConstructor('mohit',33,'delhi');
peopleObject.PrintPeople();

/*
Prototype Design Pattern
When you create a function a Prototype object is always created
That is where its advantage comes as in constructor design pattern
when you create an instance the method inside constructor is
always created but in case prototype no more creation again and again.

 */

function PrototypePattern(name,age) {

    this.name=name;
    this.age=age;
}

PrototypePattern.prototype.display=function () {

    console.log(this.name + ','+ this.age);
};

/*
Module pattern is simple way to encapsulate methods
Its just object literal.

 */

var modulePattern=function () {

    return{

        getData:function (data) {

            console.log(data);
        }
    }
};

module.exports=modulePattern();

/*
Used to restrict an object to one instance of that object 
across the application.

1. Remembers the last time you used it and hand back same instance.

*/

var TaskRepo=(function(){

    var taskrepo;
    function CreateTaskRepo() {
         var taskrepo=new Object("task");           
         return taskrepo;
    }
     
    return {
       
        getInstance:function(){

            if(!taskrepo){

                taskrepo= CreateTaskRepo();
            }
            return taskrepo;
        }

    }
   

})();

var taskrepo1=new TaskRepo.getInstance();
var taskrepo2= new TaskRepo.getInstance();

if(taskrepo1 === taskrepo2){
    console.log("same instance");
}