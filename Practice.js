/**
 * Created by Mohit Kumar on 1/9/2018.
 */

var y= {}
y.a=10;
y.b=11;

//console.log(Object.keys(y));


var j = "123" + k;
var k = "456";

console.log(j);

var t = typeof null;

console.log(t)

x = Array();
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