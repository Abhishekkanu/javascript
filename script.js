// function sayHello(){alert("hello world")}
// document.write('This is my fisrt javascript page');
// document.write('<h1>This is my fisrt javascript page</h1>');

// var pi=3.14;
// var person="are you GOD";
// var answer='YES I AM!';
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");


// function myfunction()
// {
//     var carname="welcome";
//     document.getElementById("demo").innerHTML=carname;
// }



/*var num=10;
console.log(num);
console.log(typeof(num));

num=false;
console.log(num);
console.log(typeof(num));

num="sanjeev";
console.log(num);
console.log(typeof(num));

num=null;
console.log(num);
console.log(typeof(num));

num=undefined;
console.log(num);
console.log(typeof(num));*/




/*var companyname='GOOGLE';
//number
var pi=3.14;
var year=2025;
console.log(pi)
console.log(year)

//boolean
var flag=true;
var FALSE=false;


//function
var sayHello=function(){
    alert('hello world');
}
console.log(sayHello)

//array
var numberarray=[1,2,3];
var animals=new Array("cat","dog","mouse","lion");
console.log(animals)

//object
var person={
    name:"Barak obama",
    age:'51',
    title:'44th president'
}
console.log(person)
*/



function myfunction()
{
    document.getElementById("demo").innerHTML=person.getinfo();
}
var person={
    firstname:"john",
    lastname:"Doe",
    id:5566,
    getinfo:function(){
        return this.firstname + " " + this.lastname;
    }
};