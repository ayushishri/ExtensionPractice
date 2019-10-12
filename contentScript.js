console.log("Hello");
var words = getText();
console.log(words);

function getText(){
  var bodyScripts = document.querySelectorAll("body script");
  var imgs = document.querySelectorAll("img alt")
  for(var i=0; i<bodyScripts.length; i++){
      bodyScripts[i].remove();
  }
  for(var i=0; i<imgs.length; i++){
      imgs[i].remove();
  }
  var str = document.body.textContent;
//  document.body.innerHTML = '<pre>'+str+'</pre>';
  return str;
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
}
