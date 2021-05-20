

function hotels() {
    var city = document.getElementById("city").value;
    
    var settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/locations/search?query="+city+"&locale=en_US",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "31c11e1effmsh836842a080ca6fep1bbdb6jsn7377262cf519",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };
    
    $.ajax(settings2).done(function (response) {
        
        var json_obj = response.suggestions[1].entities;
        var ht = "<ol>";
        for (var i in json_obj) {
            ht += "<li>"+ json_obj[i].name +"," + json_obj[i].caption + ", " + json_obj[i].latitude 
                  + ", " + json_obj[i].longitude + "</li>";
        }
        ht += "</ol>";
        document.getElementById("hotellt").innerHTML = ht;
        
    });
}
