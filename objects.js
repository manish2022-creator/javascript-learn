// singleton - ensures single instance in a class throughout lifetime of application
const mySym = Symbol("keys")
const Jsuser = {
    name : "Manish",
    batch : "2023-27",
    "branch" : "CSE",
    emailId : "test@gmail.com",
    CGPA : 8,
    mySym: "mykeys",

}
// console.log(Jsuser.name);
// console.log(Jsuser["branch"]);
// console.log(mySym);
// console.log(typeof Jsuser.mySym);
// values in objects is accessed by using dot line 15
// Jsuser.emailId = "test1@gmail.com"
// // Object.freeze(Jsuser)
// Jsuser.emailId = "tests@gmail.com"
// console.log(Jsuser);

Jsuser.greeting= function(){
    console.log("Hello Geeks");

}
 Jsuser.greetings = function(){
    console.log('Hello Geeks, $ {}  ');
    
 }
 console.log(Jsuser.greeting);
 console.log(Jsuser.greetings);