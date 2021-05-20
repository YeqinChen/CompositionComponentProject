
function holiday() {
    var year    = document.getElementById("year").value;;
    var country = document.getElementById("country").value;
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://public-holiday.p.rapidapi.com/"+ year + "/" + country,
      "dataType": 'JSON',
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "31c11e1effmsh836842a080ca6fep1bbdb6jsn7377262cf519",
        "x-rapidapi-host": "public-holiday.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
        
        var json_obj = response;
        var ht = "<select id='holidaylist' name='holidaylist' size=10>";
        for (var i in json_obj) {
            ht += "<option value='"+ json_obj[i].date +"'>" + json_obj[i].date + ", " 
                  + json_obj[i].localName + ", " + json_obj[i].name + "</option>";
        }
        ht += "</select>";
        document.getElementById("holidaylt").innerHTML = ht;
        document.getElementById("holidaylist").selectedIndex="0";
    });

}