function getText(){
  var bodyScripts = document.querySelectorAll("body script");
  for(var i=0; i<bodyScripts.length; i++){
      bodyScripts[i].remove();
  }
  var str = document.body.textContent;
  document.body.innerHTML = '<pre>'+str+'</pre>';
}
}

function factCheck(){
}

function biasCheck(){
}


}
function underline(text, type){ //change underline colour based on the type
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
   innerHTML = innerHTML.substring(0,index) + "<span class='underline'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}


getText();
