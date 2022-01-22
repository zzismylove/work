setTimeout(function() {
    console.log(new Date,5)
  }, 1000);
for (let i=0; i<5; i++){
   setTimeout(function() {
      console.log(new Date,i)
    }, 2000);
}
// console.log(new Date, i);
 