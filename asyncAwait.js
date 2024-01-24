/*
// async dummy eg
async function asAw(){
    var promise =new promise(function(response))
}

*/

// kind of our own instagram
async function commentCode(){
    return new Promise(function(commentCode){
        setTimeout(function(){
            commentCode("this my 1st comment icon")
        },1000)
    })
}
async function likeCode(){
    return new Promise(function(likeValue){
        setTimeout(function(){
            likeValue("this my first postis like")
        },1000)
    })
}
async function post(){
    var post= new Promise(function(postResponse){
            setTimeout(function(){
                postResponse("this is my 1st post")
            },1000)
        })
        var [feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
        console.log(feed)
        console.log(comment)
        console.log(like)
}
post()
/*
//kind of our own instagram
async function commentCode() {
    return new Promise(function (commentValue) {
        setTimeout(function () {
            commentValue("This is my first post's comment icon")
        }, 1000)

    }
    )
}
async function likeCode() {
    return new Promise(function (likeValue) {
        setTimeout(function () {
            likeValue("This is my first post's like icon")
        }, 1000)

    }

    )
}
async function post() {
    let post = new Promise(function (postResponse) {
        setTimeout(function () {
            postResponse("This is my first post")
        }, 2000)
    })
    var [feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])//if u not put this line and u put the next three line the output will not be displayed in 1sec ,it will display in 3s(1s+1s+1s)for 3 three function
    //console.log(await post)
    //console.log(await commentCode())
    //console.log(await likeCode())
    console.log(feed)
    console.log(comment)
    console.log(like)
}
post()
*/