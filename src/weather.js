$(document).ready(function() {

    // ### GET TEMPERATURE BASED ON CITY ###
    $( ".btn-citySubmit" ).click(function() {
            let cityName = $('#cityName').val();
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey + "&units=metric",
                type: "POST",
                success: function (data) {  
                    $.each(data, function(index) {
                        $('.test').text('Temperature in ' + cityName + ' is ' + data.main.temp + '°C');
                    });
                },
                error: function (data) {               
                    console.log(" Error  : " + data);
                    alert("This city does not exist. Please type another city into the search box.")            
                }
            }); 
        });   

});