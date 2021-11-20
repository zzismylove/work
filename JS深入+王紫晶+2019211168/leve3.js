var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
          { name: "Amber",sex: "woman"},
          { name: "Barbara",sex: "woman"},
          { name: "Venti",sex: "man"}], 
    work: { 
            time: "2021", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

 let obj = JSON.stringify(data);
 let newdata =JSON.parse(obj);
 console.log(newdata);
 newdata.age=21;
 console.log(newdata);//改变newdata的数据，原data对象的数据不会改变
 console.log(data);