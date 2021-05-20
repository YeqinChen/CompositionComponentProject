
function weather() {
    var city      = document.getElementById("city").value;
    var startdate = document.getElementById("startdate").value;
    var enddate   = document.getElementById("enddate").value;
    const settings3 = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=d6e8ad0be4bb4a0db5091606211305&q="+city+"&format=json&includelocation=yes&date="+startdate+"&enddate="+enddate,
        "method": "GET",
        "headers": {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:78.0) Gecko/20100101 Firefox/78.0"
        }
    };
    
    $.ajax(settings3).done(function (response) {
        var json_obj = response.data.weather;
        
        var ht = "<ul>";
        for (var i in json_obj) {
            ht += "<li>"+ json_obj[i].date + "," 
                  + json_obj[i].hourly[4].weatherDesc[0].value
                  + ", Max. Temp. (C): " + json_obj[i].maxtempC 
                  + ", Min. Temp. (C): " + json_obj[i].mintempC
                  + ", Avg. Temp. (C): " + json_obj[i].avgtempC
                  + ", Sunrise: " + json_obj[i].astronomy[0].sunrise
                  + ", Sunset: "  + json_obj[i].astronomy[0].sunset
                  + "</li>";
        }
        ht += "</ul>";
        
        document.getElementById("weatherlt").innerHTML = ht;
    });


}