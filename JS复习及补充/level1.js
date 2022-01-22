let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day.";
//去除特殊字符 � 、？
 var trimSpecial =function(string) {
 //对于特殊符号后面问号跟着的,如果是字母就转换成大写
      arr=Array.from(string);
      for(var i=0;i<arr.length;i++){
          if(arr[i]=='?'){
              if(/^[a-z]+$/.test(arr[i+1].value))
              arr[i+1]=arr[i+1].toUpperCase()
          }
      }
      string=arr.toString();
      const pattern=/[\,]/g;
      string=string.replace(pattern,"");
       //替换字符串中的所有特殊字符
      const pattern1=/[\�|\?]/g;
      string = string.replace(pattern1," ");
      return string;
  }
str=trimSpecial(str);
console.log(str) // 'I'm going to take a trip to Daocheng on May Day.'
  