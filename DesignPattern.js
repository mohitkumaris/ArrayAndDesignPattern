/**
 * Created by Mohit Kumar on 1/9/2018.
 */
// Creational Design Patterns
/*
Factory Design Pattern
1. Create a Factory function
2. Create an Object with some properties
3. As it creates a factory for multiple instantiation
 */

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


var People1= peopleFactory('Mohit',33,'delhi');
People1.PrintTemp();


/*
Constructor Design Pattern
 */

