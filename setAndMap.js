
/*
//set
setExample=new Set("aiadmk","bjp","congress")
setExample1=new Set(["aiadmk","bjp","congress"])
setExample.add("dmk")
setExample1.add("dmk")
console.log(setExample)
console.log(setExample1)
// for in loop
for(key in setExample1){
    console.log(key)
}// output=> no output
// for of loop
for(value of setExample1){
    console.log(value)
}// output => o/p will display
*/

//MAP
mapEg=new Map([["id","21ecr066"],["name","Gowtham"]])
console.log(mapEg)
mapEg1=new Map([["id","21ecr066"],["name","Gowtham"]])
mapEg1.set("age","20")
mapEg1.set("phone","1234567890")
console.log(mapEg1)
mapEg1.delete("phone","1234567890")
console.log(mapEg1)

// for in
for(key in mapEg){
    console.log(key)
}
// for of
for(value of mapEg){
    console.log(value)
}
console.log(mapEg.has("name"))
