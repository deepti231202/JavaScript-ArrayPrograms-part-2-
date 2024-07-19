//program 1:

// for(let n=1;n<=100;n++)
// {
//     if(n%3==0 && n%5==0)
//     {
//         window.alert("FizzBuzz","<br>");
//     }
//     else if(n%3==0)
//     {
//       window.alert("Fizz","<br>");
//     }
//     else 
//     {
//       window.alert("Buzz","<br>");
//     }
// }

//program 2:

// function palindrome(str)
// {
//     let str1="";
//     for (let j=str.length-1;j>=0;j--){ 
//         str1 += str[j];
//     }
//     if(str==str1){
//         return "It is a Palindrome";
//     }
//     else{
//         return "It is Not a Palindrome";
//     }
// }
// document.write(palindrome("amma"),"<br>")
// document.write(palindrome("hello"))


//program 3:

// let arr=[32,43,67,10] ;
// let arr1=arr.sort();
// let length1=arr1.length;
// document.write("Largest Number: ",arr1[length1-1]);

//program 4:

// function counting(str) {
//     let Count = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
        
        
//         if (Count[char]) {
//             Count[char]++;
//         } 
//         else {
//             Count[char] = 1;
//         }
//     }
//     return Count;
// }
// let string = "hello everyone";
// console.log(counting(string));



//program 5:    

// function longword(str){ 
//     str = str.split(" ") 
//     return str.sort((x, y) => y.length - x.length)[0];
// } 
// document.write("Longest word :",longword("Good evening everybody!"))



//program 6:
// let n=6;
// let fact=1;
// for(let i=1;i<=n;i++)
// {
//     fact=fact*i;
// }
// document.write(fact);

//program 7:
 
// function conversion(a) {
// 	return ((a * 9.0 / 5.0) + 32.0);
// }
// const a = 20;
// document.write("Celcius to Fahrenheit : ",conversion(a));

// const name1={
//     fname:"Deepti",
//     lname:"S",
//     person:function() {
//         return (this.fname," "+this.lname);
//     }
// }
// const place={
//     city:"cbe",
//     state:"tn"
// }
// name1.person.call(place);

// Define the first object as a function
// let firstObject = {
//     statement: "This is the first object.",
//     printStatement: function() {
//       console.log(this.statement);
//     }
//   };
  
//   // Define the second object
//   let secondObject = {
//     statement: "This is the second object."
//   };
  
//   // Call the printStatement function of the first object using call method
//   firstObject.printStatement.call(firstObject);
  
//   // Print the statement of the second object using call method from the first object
//   firstObject.printStatement.call(secondObject);
  
  // const sq=(a) => a*a;
  // console.log(sq(5));

  //=======================================================================================
//                                             16/07/2024

// 1) array creation and initialisation

//   let a = ["chocolate", "strawberry","blackcurrent","blueberry"];
// console.log('flavours=',a );

// let flavours = [420, 100, 13, 12];
// console.log('flavours=',flavours );

//=========================================================================================

 // 2) array manipulation

// let arr=["pen","pencil","eraser","sharpner"];
// arr.push("scale");
// console.log(arr); //push() method(add)

// let arr1=["hi","hello","welcome","greetings"];
// arr1.unshift("vanakam");
// console.log(arr1); //unshift method(adds in the beginning)

// let arr2=["hi","hello","welcome","greetings"];
// arr2.pop("vanakam");
// console.log(arr2); //pop() method(remove)

// let arr3=["pen","pencil","eraser","sharpner"];
// arr3.shift("pen");
// console.log(arr3); //shift method-removes pen

//=======================================================================================

//3) array searching

// let array=[12,22,32,42,52];
// array.indexOf(0);
// console.log(array);

//find()


//====================================================================================

// 6) array sorting-sort() , reverse()

// let sorting=[9,8,7,6,5,4,3,2,1];
// let sort=sorting.sort();
// console.log(sort);

//reverse
      // let reverse=[9,8,7,6,5,4,3,2,1];
      // let rev=reverse.reverse();
      // console.log(rev);

//========================================================================================

// 14) Merging two arrays

// const arr11 = ["apple","orange","watermelon"];
// const arr22 = ["green apple","grapes","strawberry"];
// const fruits = arr11.concat(arr22)
// console.log(fruits);

//=============================================================================================

// 18/07/2024

// 10)  maximum

// console.log(Math.max(32,23,12));

//  minimum

// console.log(Math.min(99,999,9999));

// array maximum
// const array1 = [1, 3, 2];

// console.log(Math.max(...array1))

//array minimum
// const array2 = [1, 3, 2];

// console.log(Math.min(...array1))

//========================================================================

// 12)  checking an array

// const arr = [21, 12, 13, 45, 54];
// if (arr.includes(12)) {
//     console.log("12 is present in the array.");
// } else {
//     console.log("12 is not present in the array.");

// }

//============================================================================

// 15) array spreading

// let ele=[11,223,33];
// let obj=[...ele];
// console.log(obj)

//
//=====================================================================

//                               19/07/2024

//  4) Array filtering
// let str=['String','Star','Moon','Galaxy'];
// let lessThan=str.filter(str => str.length < 6);
// console.log(lessThan);

//==================================================================================

//   5) Array Mapping

// let n=[1,2,3,4,5];
// let n1=n.map((x) => x*2);
// console.log(n1);

//==========================================================================

//23)implementing  stack with arrays

// var stack = [1 , 3];
// stack.push(2);
// var value = stack.pop()
// console.log(value);

//========================================================================

//24)implementing queue with arrays

// var queue = [2 ,3 ,];
// queue.push(1);
// var value = queue.shift()
// console.log(value);

//=================================================================================

// 22) Array manipulation with slice

const items = ["Rice", "Dal", "Juice", "Scale", "Pen"];
const grocery = items.slice(0, 2)
console.log(grocery);

//=================================================================================