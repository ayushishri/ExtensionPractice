chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'developer.chrome.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction(), console.log(getText)]

  }]);
});

});

function getText(){
  var bodyScripts = document.querySelectorAll("body script");
  for(var i=0; i<bodyScripts.length; i++){
      bodyScripts[i].remove();
  }
  var str = document.body.textContent;
  document.body.innerHTML = '<pre>'+str+'</pre>';
  return str;
}
}
