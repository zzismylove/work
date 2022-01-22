function Student(name) { 
	function People(name) {
            console.log("Hi! This is "+name+"!");
            People.prototype.queue=[];
            setTimeout(function(){
                People.prototype.next()
            })
            return this;
	}
    People.prototype.next=function(){
        let fn=this.queue.shift();
        fn && fn()
    }
	People.prototype.sleep = function(time) {
       let fn=()=>{ setTimeout(function() {
            console.log("Wake up after "+time);
           }, 1000*time);
           People.prototype.next();
		
	}
    People.prototype.queue.push(fn);
    return this;
}

    People.prototype.sleepFirst = function(time) {
     let fn=()=>{ setTimeout(function() {
        console.log("Wake up after "+time);
       }, 1000*time);
       People.prototype.next();
    }
    People.prototype.queue.push(fn);
    return this;
}
    People.prototype.study = function(course) {
		let fn=()=>{
            console.log("Study "+course+"~");
         People.prototype.next()
    }
         People.prototype.queue.push(fn);
    return this;
	}

	return new People(name);
}

// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
// Student('fxy').sleepFirst(5).study('Ajax');