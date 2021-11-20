function course()
{
  this.coursename="CSA前端培训";
  this.semester=2;
}
function student(name,age,gender)
    {
      this.name=name;
      this.age=age;
      this.gender=gender;
      this.moreinfo=function()
      {
          this.gender=gender
        var	detail=function()
        {
        console.log(gender);
        }
        detail();
      }
    }
    student.prototype=new course();
    student.prototype.constructor=student;
    var student1 = new student("小明",18,"男");
    console.log(student1.coursename,student1.semester); 
    student1.moreinfo();  