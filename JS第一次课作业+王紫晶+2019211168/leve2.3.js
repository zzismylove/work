var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
         {name:'lisi',age:29},{name:'wangwu',age:24}];
     var key;
     var way;
function sortby( key , way=true ){//way为true表示默认按照升序排列
  return function(object1,object2){
      var value1=object1[key];
      var value2=object2[key];
      if(way){
      if(value1>value2) {
          return 1;
      }
      else if(value1<value2){
          return -1;
      }else{
          return 0;
      }
    }
    else{
        if(value1>value2) {
            return -1;
        }
        else if(value1<value2){
            return 1;
        }else{
            return 0;
        }

    }
}
}

console.log(arr.sort(sortby('age')));//[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name',false))) ;//[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响