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



// function myfunction()
// {
//     document.getElementById("demo").innerHTML=person.getinfo();
// }
// var person={
//     firstname:"john",
//     lastname:"Doe",
//     id:5566,
//     getinfo:function(){
//         return this.firstname + " " + this.lastname;
//     }
// };




// 13-12-2024
var person2=new Object();
person2.name='abhi';
person2.age=22;
person2.ismarried=true;
person2.address=[];
person2.address.street="nagar";
person2["address"]["flatno"]=33;

//showing in console
console.log(person2);

//printing in the document
document.write(person2)
document.write("<br>");
document.write(person2["ismarried"])
document.write("<br>");



//JAVA SCRIPT SCOPE
function show(){
    var a="a is local outer variable";
    document.write(a+"<br>");
}

function disc(){
    var b="b is local inner variable";
    document.write(b+"<br>");
}
disc();
show();