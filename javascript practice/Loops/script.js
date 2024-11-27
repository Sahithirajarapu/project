// for loop


let a = 1;
for (let i = 0; i < 100; i++) {
    console.log("value",a+i)
    
}


// for in loop

let obj = {
    "name":"sahithi",
    "role" : "front-end-developer",
    "company":"Google"
}

for (const key in obj) {

       console.log(key,obj[key]);
        
    }

    // for of loop


for (const s of  "sahithi") {

    console.log(s)
    
}


//  while loop

let  x = 0;
 while(x<10){
    console.log(x);
    x++;
 }



 // Do while loop
let d = 20;
 do {
    console.log(d);
    d++;
    
 } while (d<0);

