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




/*
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
*/



/*
// 16-12-2024
var a=10;
function functiona() {
    console.log("start function a");

    function functionb() {
    console.log("start function b");

    }
    functionb();
}
functiona();
console.log("global context");



var name='john';
function first(){
    var a ='hello';
    second();
    console.log(a + " " + name);
}

function second(){
    var b ='hi';
    third();
    console.log(b + " " + name);

}

function third(){
    var c ='hey';
    console.log(c + " " + name);
}
first();


//if condition
var age=20;
if(age>18){
    document.write("<b>YOU ARE ELIGIBLE TO VOTE.</b>");
}
else{
    document.write("<b>NOT ELIGIBLE.</b>");
}


//switch case
var grade = 'A';
document.write("<br>entering switch block <br/>");
switch(grade){
    case 'A':document.write("good job <br/>");
    break;
    case 'B':document.write("good <br/>");
    break;
    case 'C':document.write("better <br/>");
    break;
    case 'D':document.write("not so good <br/>");
    break;
    case 'E':document.write("bad <br/>");
    break;

    default:document.write("unkonwn grade <br/>")
}
document.write("exiting switch box");


//loops
var count;
document.write("starting loop" + "<br/>");
for(count=0; count<10; count++){
    document.write("current count:"+count);
    document.write("<br/>");
}
document.write("loop stopped!");


//odd even program
for(var i=0;i<100;i++)
{
    if(i%2==0){
        console.log(i + "is an even number.");
    }
    else{
        console.log(i+"is an odd number.");
    }
}

//objects
var myarray = ["A","B","C"];
for(var i=0; i<myarray.length;i++)
{
    console.log("The member of myarray in index " + i +" is " + myarray[i]);
}


//while loop
var count=0;
document.write("starting loop");

while(count<10){
    document.write("current count:"  + count + "<br/>");
    count++;
}
document.write("loop stopped");


//javascript function without parameters
function myfunction()
{
    alert("hello world");
}


//js function with parameters
function sayhello(name,age)
{
    document.write(name + " is " + age + " years old ");
}

//function to add
function add(a,b){
    console.log(a+b);
    document.write(a+b);
}
add(10,20);
*/




/*
// 23-12-2024
var res =mul(12,30);
function mul(x,y){
    return x*y;
}
document.write(res);


//ARROW FUNCTION
function add(a,b){
    console.log (a+b);
}
add(10,20);
var add2=(a,b)=>{
    console.log(a+b);
};
add2(102,20);

var add3=(a,b)=>console.log(a+b);
add3(30,20);


//adding string and number
function myfunctionadd(){
    var x=3+3;
    var y="3"+3;
    var z="hello"+3;
    var demoP=document.getElementById("demo");
    demoP.innerHTML= "5+5="+x+"<br>"+"5+5="+y+"<br>+5+5="+z;
}

//array is js
var mycollection=[1,"meera maam",true,{name:"john",age:34},function(name){console.log(name);},["abhishek","bachhan","amitabh","bachhan"]];
console.log(mycollection);
*/



// 27-12-2024
/*
function information(firstname, lastname, language){
    if(arguments.length===3){
        console.log(firstname);
        console.log(lastname);
        console.log(language);
    }
}
information();
information('jitendra','abhi','vivek');


function sayhello(){
    alert("hello world")
}



function over(){
    document.getElementById('mytext').style.color = "red";
}
function mount(){
    document.getElementById('mytext').style.color = "magenta";
}


//CONFORMATION DIALOG BOX
var retval=confirm("do you want to continue?");if(retval==true){
    alert("user want to continue!");
}else{
    alert("user doesnot want to continue!");
}


// promt dialog box
var retval = prompt("enter your name:","your name here");
alert("you have entered : " + retval);

var name=prompt("enter your Name","Name");
document.write("<h2>Hello"+ name+"</h2>");
*/


/*
//QUIZ
var question="what is 10+10";
var answer=20;
var correct='<img src="right.jpg" height="150" width="250">';
var incorrect='<img src="wrong1.jpg" height="150" width="250">';
var response=prompt(question,"0");
for(count=0;count<3;count++){
    if(response!=answer)
    {
        confirm("wrong, press OK for another chance");
        response=prompt(question,"0");
        if(count==1)
        {
           alert("better luck next time");
        }
    }
    else{
        alert("great!! you are right");
        count=2;
    }
}
var output=(response==answer)?correct:incorrect;
document.write("</br>")
document.write(output);
*/

//redirect to other link
function redirect(){
    window.location="https://www.facebook.com";
}
document.write("You will be redirected to main page in 10 sec.");
setTimeout('redirect()',10000);

//input text validation
function validationform()
{
    var x=document.forms["myform"]["fname"].value;
    if(x==null || x=="")
    {
        alert("first name must be filled out");
        return false;
    }
}