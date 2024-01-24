/*
//functions
//example1                        
function fun(){                  //parameter or return type
    console.log("function sample example")
}
fun()                             //argument
*/

//example2
function fun(a,b){
    console.log("function with argument and with retun type")
    for(i=a;i<b;i++){
        if (i%2==0){
            console.log("the even no are "+i)
        }
        else{
            console.log("the odd no are "+i)
        }
    }

}
fun(1,5)






//harshan code



//Function
//Example 1=>Function without argument and without return type
/*function fun(){
    console.log("Function Sample Example")
}
fun()*/

//Example 2=>Function with argument and without return type
/*function fun(a,b){
    console.log("Function with argument and without return type")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The Number",i,"is even")
        }
        else
        {
            console.log("The Number "+i+" is odd")
        }


    }
}
fun(5,10)*/

//Example 3=>Function with argument and with return type
/*function fun(a,b)
{
    return a*b
}
console.log(fun(5,2)) 
*/
 
//Example 4=>Function without argument and with return type
function fun()
{
    var a=10;
    var b=20
    return a+b
}
console.log(fun())