

// **Anonomous Function** : which have no name

// var anoFunc = function(a,b){
//     return a+b;
// }
// console.log(anoFunc(4,5));


// =>DATE METHOD 

// var newDate = new Date();
// console.log(newDate);
// console.log(newDate.toLocaleString()); => returns the date and time
// console.log(newDate.toString())

//console.log( Date.now()) =>returns milisecond from 1st january 1970 to now

// var newDate = new Date();
// console.log(newDate.toLocaleString())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())
// console.log(newDate.getDate())

// => get jastai set pani hunxa.... setHours(),setTime(),setMinutes(),setSeconds(),setMiliSeconds(),


// (function(){
//     setInterval(()=>{
//         var d = new Date().toLocaleTimeString();
//         console.log(d);
//     },1000);
// })();

// Gives local time after each second*********


//********Math FUNCTION**********
   
//    .round(num)
//    .pow(num1,num2)
//    .sqrt(num)
//    .abs(-num) => convert negative value to positive value
//    .ceil(num) => mathi laijanxa
//    .floor(num) => tala gharalxa
//    .min(num1,num2,num3...) => give minimum Number
//    .max(num1,num2,....)=> return max number
//    .trunc(num) => return integer part of a number


//*****document.documentElement**** => returns the root element of web
//*****document.body 
// *****document.childrens
// *****document.child.length
// *****document.hasChildNodes()

// const add = (a,b) => {
//     console.log(a+b)
// }
// add(4,5)

// Higher order function : as an argument accept a function
// Call back function : as an argument call garni


//Lexical Scoping : child function can use from parent but not vice-versa

// Event bubbling : fired first bottom div and than parent div 
// Event capturing : parent and than child div

// const func2 = () => {

//     setTimeout( () => {
//     console.log(`function 2 is call`);
// },3000);
// }

//     const func1 = () => {
//         console.log(`function 1 is call`);
//         func2();
//         console.log(`function 1 is call`);
//     }
//     func1();


 // Curring function

 // sum(5)(3)(8)

//  const sum = (num1) =>{
//     console.log(num1)

//     return function(num2){
//         console.log(num1,num2)

//     return function(num3){
//         console.log(num1,num2,num3)
//     }
//   }
//  }  

//   sum(5)(3)(8)


//       XMLHttpRequest
                //  use to interact with Server
                //  without refressing we can retrieve data

                // AJAX : asynchoronous js and xml
        

                // const num = [2,3,4,7,11,20];
                // const target = 30;

                // const helloFunction = () => {
                //      const a = num.indexOf(3)
                //      const b = num.indexOf(7)
                //      const c = num.indexOf(20)

                //      console.log(`[${a},${b},${c}]`)
            
                // }
                // helloFunction()

            
//  ********** Roman into Numbers **********
// var romanToInt = function() {
//     let s='III'
//     const myMap = {
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }
// let result = 0
// for(let i=0;i<s.length;i++){
//     const curr = myMap[s[i]]
//     const next = myMap[s[i+1]]

//     if(curr<next){
//         result+= next-curr
//         i++
//     }
//     else{
//         result+= curr
//     }
// }
// return console.log(result)
// };
// romanToInt()


// return indexes whose sum is equal to target****

// const arr = [4, 5, 10, 20, 9, 7];
// let target = 30;

// let a,b;
 
// for(a=0;a<=arr.length;a++){
//    for(b=0;b<=arr.length;b++){
//    if(arr[a]+arr[b]==target){
//       console.log([a,b])
//       return
//    }
//  }
// }



//RETURN SUM OF DIAGONAL OF MATRIX***
// var diagonalSum = ()=> {
//    let i,j
//    let matrix = [
//       [6,2,5,],
//       [4,5,6],
//       [7,8,9]
//    ];
//    let sum=0
//    for(i=0;i<matrix[0].length;i++){
//        for(j=0;j<matrix.length;j++){
//            if(i+j==matrix.length){
//                  sum =sum+matrix[i][j]
//             }
//        }
//    }
//    console.log(sum)
// };
// diagonalSum()


// RETURN MATRIX ELEMENTS IN SPIRAL SHAPE

// var spiralOrder = () => {

//     let matrix = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ];
//     let arr = []
//     let l=0
//     let r=matrix[0].length
//     let t=0
//     let b=matrix.length
//     let i

//     while(l<r && t<b){
//         for(i=l;i<r;i++){
//             arr.push(matrix[t][i])
//         }
//         t++;
//         for(i=t;i<b;i++){
//             arr.push(matrix[i][r-1])
//         }
//         r--;

//          if (!(l < r && t<b)){
//             break;
//         }

//         for(i=r-1;i>l;i--){
//             arr.push(matrix[b-1][i])
//         }
//         b--;
//         for(i=b;i>t;i--){
//             arr.push(matrix[i][l])
//         }
//     }
//     console.log(arr)
// };
// spiralOrder()


// PALINDROME**

// const palindromeNum = () =>{
//     let x = 121
//     let value = x.toString().split("").reverse().join()
//     let values = x.toString().split("").join()
//     // console.log(values)
//     // console.log(value)
//     if(value==values){
//         console.log("palindrome")
//     }
//     else{
//         console.log("not a palindrome")
//     }
// }
// palindromeNum()

// ****LONGEST COMMON PRIFIX*****

// var longestCommonPrefix = function() {
//     const strs = [
//         "flower",
//         "flower",
//         "flower"
//     ];
//     if(strs.length==0){
//         console.log("")
//         return
//     }
//     for(let i=0;i<strs[0].length;i++){
//         for(let j=1;j<strs.length;j++){
//             if(strs[0][i]!=strs[j][i]){
//                     console.log(strs[0].slice(0,i));
//                     return;
//             }
//         }
//     }
//     console.log(strs[0])
// };
// longestCommonPrefix()