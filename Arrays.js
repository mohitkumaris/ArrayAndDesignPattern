/**
 * Created by Mohit Kumar on 1/2/2018.
 * insertion
 */

function Insertion() {

    var arr = [1, 2, 5, 6, 7];
    var itemtoinsert = 10;
    var n = 5;
    var k = 3;
    var j = n - 1;
    var n = n + 1;
    while (j >= k) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[k] = itemtoinsert;
    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }
}



/*Deletion */
function Deletion() {

    var arr=[1, 2, 5, 6, 7,10];
    var postionToDelete=3;
    var j=postionToDelete;
    var n=6;
    while(j<n){
        arr[j-1]=arr[j];
        j=j+1;
    }
    n=n-1;

    for(var i=0;i<n;i++){
        console.log(arr[i]);
    }

}

Deletion();