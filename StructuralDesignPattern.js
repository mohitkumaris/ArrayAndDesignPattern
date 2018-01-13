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

/*
Facade pattern
simplified interface to complicated system

1. Facade hides chaous from us
2. SImplifies the interface
3. Jquery is the best example of Facade
4. Difference between decorator and facade i in decorater we add functionality
but in facade we don't
 */

/*
Flyweight Pattern
Conserve memory by sharing portion of object
between objects.
Only useful if there is large number of objects.
 */

