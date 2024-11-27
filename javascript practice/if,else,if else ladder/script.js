// console.log("Hii I am learning conditional statements");

 let age = 65;


// operators


//  let grace = 2;
//  console.log(age+grace);
//  console.log(age-grace);
//  console.log(age*grace);
//  console.log(age%grace);
//  console.log(age/grace);
//  console.log(age**grace);



// if-else if - else ladder


 if(age>18)
{
    console.log("you can drive");
}
 else if(age == 0)
{
    console.log("Are you kidding me");
 }
 else if(age==1){
    console.log("Are you kidding me again");
 }
 else
 {
    console.log("you cannot drive");
 }
 
// ternary operators

 let a = 3 ;
 let b = 6;
let c = a > b ? a - b : b - a;



//   switch case example 

let grade = 0;

switch(grade){
    case 0 : 
        console.log("zero");
       
           case 1 : 
            console.log("one");
            
               
               case 2 : 
                console.log("two");
                break;
                   
                   case 3 : 
                    console.log("three");
                       
                       default:
                        console.log("DEFAULT");
                       
}