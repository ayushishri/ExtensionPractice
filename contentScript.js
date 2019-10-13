console.log("Hello");
var currentURL = window.location.href;
console.log(currentURL);
//var text = getText();
//console.log(text);

function getText(){
  var bodyScripts = document.querySelectorAll("body script");
  for(var i=0; i<bodyScripts.length; i++){
      bodyScripts[i].remove();
  }
  var str = document.body.textContent;
//  document.body.innerHTML = '<pre>'+str+'</pre>';
  return str;
}

function factCheck(words, type){

}

function biasCheck(words, type){

}

function highlight(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text); // position of the first occurance of text
  if (index >= 0) {
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

function underline(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text); //position of the first occurance of text
  if (index >= 0) {
   innerHTML = innerHTML.substring(0,index) + "<SPAN STYLE='text-decoration:underline'>" + innerHTML.substring(index,index+text.length) + "</SPAN>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }

function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://factchecktools.googleapis.com/v1alpha1/claims:search" , true ); // false for synchronous request
  xmlHttp.send();
  console.log(xmlHttp.readyState);
  return xmlHttp.responseText;
  }
}
