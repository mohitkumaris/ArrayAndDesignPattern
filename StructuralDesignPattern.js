'use strict';

/*
Decorator pattern
used to add new functionality  to an existing object
without being obstructive.
*/

var demodecorator=function (name,age) {

    this.name=name;
    this.age=age;


    demodecorator.prototype.showData=function () {

        console.log(name + ' ' + age);
    }
};

var decoobject= new demodecorator('mohit',33);
decoobject.showData();

decoobject.shownewData=function () {

    console.log('new data without changing the first one');
};
decoobject.shownewData();