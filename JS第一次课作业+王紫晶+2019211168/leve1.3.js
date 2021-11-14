var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
    arr1.push.apply(arr1,arr2);
    for(var i=0;i<arr1.length;i++)
    for(var j=0;j<arr1.length-i;j++)
    {
       var temp;
       if(arr1[j]>arr1[j+1]){
           temp=arr1[j];
           arr1[j]=arr1[j+1];
           arr1[j+1]=temp;
       }
    }
   return arr1;
}

console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]