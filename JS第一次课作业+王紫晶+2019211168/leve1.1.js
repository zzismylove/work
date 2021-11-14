var arr=[1,2,3,3,4,'a','a','b','c'];

function reduce(arr){
  var res=[];
  var i = 0,j;
  var k=0,tag=0;
  for(i;i<arr.length;i++)
 {
   for(j=i+1;j<arr.length;j++) 
   {
       if(arr[i]==arr[j])
         arr[j]=undefined;
   }
   if(arr[i]!=undefined)
   {
    res[k]=arr[i];
    k++;
   }
}
  return res;
}
console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]