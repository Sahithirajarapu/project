console.log("Hii sahithi");

var a = 5;
a=a+1;
var b = 7;
var c = "sahithi";
 
console.log("sum of a an b is ",a+b);
console.log(typeof c)

    // var -  is a global scope variable , redclared and updated
    // let -  is a block scope variable , cannot be redeclared but can be updated
    // const - cannot be redeclared and updated 


    let  a1 = 24;
    let a2 = "sahithi";
    let a3 ="boolean";
    let a4 = "undefined";
    let x = null;  // type of null is always an object
    let y = BigInt("123456");
    let z = Symbol("hii");

    console.log(a1,a2,a3,a4,x,y,z);
    console.log(typeof a1,typeof a2,typeof a3,typeof a4,typeof x,typeof y,typeof z);
    

    //objects

    let obj ={
   
         "name":  "sahithi",
        "phoneNumber":7569746372,
        "marks" : 100,
        "isstudent" : "true"
    }
    console.log(obj);
     obj.college = "Loyola";
     console.log(obj)
     obj.marks = obj.marks - 10;
     console.log(obj)