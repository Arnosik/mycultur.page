function summa(arr) {

    var sum = 0;
    
    for(var i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
    
}
    
var array = [60, 8, 3];
var res = summa(array);
console.log(res);




