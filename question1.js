var request= new XMLHttpRequest();

request.open('Get','https://restcountries.com/v3.1/all');

request.send();

request.onload=function(){
var data=JSON.parse(request.response);

