var usertext = document.querySelector("#usertext");
var tarnslate = document.querySelector("#translate-btn");
var output = document.querySelector("#groot");


var grootUrl ="https://api.funtranslations.com/translate/groot.json"

function linkConstruct(text){
    return grootUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("The server is not responding please try after sometime")
}


 tarnslate.addEventListener("click", function eventHandle() {

    var usertextInput = usertext.value;

fetch(linkConstruct(usertextInput))
    .then(function responseHandler(response) { return response.json()})
    .then(function logData(data) {
        var Output = data.contents.translated;
        output.innerText = Output})
    .catch(errorHandler);
            
          

    }
  

)