/*
//callback
function ramuSomu(welcomeMessage,callback){
       setTimeout(function(){
        console.log(welcomeMessage)
        callback();
       },2000)
}
function miniAni(){
    console.log("Odi Poiru vanthudatha da thambi!!!!")
}
ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)
*/

//form example
function submitForm(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick)
        db()
    },1000
    )

}
function database(){
    console.log("Form submitted successfully")
}
submitForm("Form submit button clicked",database)
