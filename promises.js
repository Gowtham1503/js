function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
  });


  /*// EXAMPLE2=> GOOGLE MAP
  function isLocatonValid(){
    var v="Melbourne"
    if (v==="loc"){
      return true 
    }
    else{
      return false
    }
  }
  function location(){
    return new Promise(function())
  }
 location().then()*/