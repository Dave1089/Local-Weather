unit='Metric';
gotCity = function(){
$.getJSON('http://ip-api.com/json/?callback=', function(data){
  cityName = data.city;       $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=afbf2e31f72ceb510601b270d40a7a70&units="+ unit , function(json) {
      
city = json.name + ", " + json.sys.country;
weatherTemp = json.weather[0].description;
weather = weatherTemp.charAt(0).toUpperCase() + weatherTemp.substr(1).toLowerCase();
icon = json.weather[0].icon;
iconLink = "http://openweathermap.org/img/w/";
temp = json.main.temp;
$("#city_name").html(city);
$("#c_weather").html(weather);
$("#c_icon").attr("src",iconLink+icon+".png");
$("#c_temp").html(temp);
     });
  
});

}

$(function(){

$("#u_fer").on("click",function(){
  
   unit = "Imperial";
   gotCity();
    $(this).css("color","#222");
    $('#u_cel').css("color",'#337ab7');
    $("#fer_l").removeAttr('href');
    $("#cel_l").attr('href','#');
   
  
});

$("#u_cel").on("click",function(){
  
   unit = "Metric";
   gotCity();
   $(this).css("color","#222");
    $("#u_fer").css("color","#337ab7");
    $("#cel_l").removeAttr('href');
    $("#fer_l").attr('href','#');
   
  
});

gotCity(); 

});
