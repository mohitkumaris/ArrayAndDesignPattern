/**
 * Created by Mohit Kumar on 1/12/2018.
 */
'use strict'
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
   console.log(foo);

}
bar();