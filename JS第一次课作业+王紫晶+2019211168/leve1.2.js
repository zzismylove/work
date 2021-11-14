var arr=[1,5,4,8,2,6,3,9,7];

function mySort(arr){
  	var i=0,j;
    for(i;i<arr.length;i++){
      j=0;
      for(j;j<arr.length-i;j++)
     {
      var temp;
      if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
       }
     }
}
return arr;
}     
console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]