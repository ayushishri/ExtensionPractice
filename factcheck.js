function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://factchecktools.googleapis.com/v1alpha1/claims:search" , false ); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}




