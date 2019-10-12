function underline(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text); //position of the first occurance of text
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<SPAN STYLE="text-decoration:underline">" + innerHTML.substring(index,index+text.length) + "</SPAN>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}