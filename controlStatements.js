/*
//looping
//for loop
sum=0
for(i=0;i>10,i++){
    sum+=i
}
console.log(sum)
*/
/*
i=0
while(i<10)



*/
/*
//example2
arr=[10,20,30]
console.log(arr.length)
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/
/*
//for of loop
arr=[10,'string','kongu',20,true]
for (const value of arr){
    console.log(value)
}
*/
/*
// for each loop
arr=[10,'string','kongu',2,true]
arr.forEach(value=>{
    console.log(value)
});
*/
//example2
var kongu=new Object()
kongu["fees"]=100000
kongu["hostelCount"]=10
kongu["food"]="pretty decent"
kongu["accomodation"]="good"
console.log(kongu)
//for in 
for(key in kongu){
    console.log(key,kongu[key])
}
//for each eg
kongu.forEach((key,element)=>{
    console.log(key,element)
});