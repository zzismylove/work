var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(arr) {
    for(var i=0;i<arr.length;i++){
        if(arr[i] instanceof Array)
        {
         fun1(arr[i]);
        }
        else 
        {
         res=res.concat(arr[i]);   
        }
      }
     
}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];