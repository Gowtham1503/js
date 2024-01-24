//ES6->ECMA Script 6 Standard
//1)var,let,const=>refer variable.js
//2)Arrow Function
var fun=()=>{
    console.log("Hello")
}
fun()
//3.Destructring
var array =[10,20,30,40,50]
var[a,b,c,d,e]=array
console.log(a,b,c,d,e)
//4.speard
var array =[10,20,30,40,50]
var arr1=[...array,60,70]
console.log(arr1)