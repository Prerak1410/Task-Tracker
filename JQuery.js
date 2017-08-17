
$(document).ready(function () {
    //var xyz;
    $.getJSON('Existing.json',function (abc) {
        //xyz=abc.Existing1;
       // var i=0;
        //$("#one").text(abc[i].name+" "+abc[i].date+" " +abc[i].assigned);
        $.each(abc,function (i,xyz) {
            $("#one").append(xyz," ")
        })
    })
    /*var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Existing.json", true);
    var j=0;
    var i=j;
    var abc;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            abc = response.Existing1;
            $.fn.def();
        }
    }
    xhttp.send();
    $.fn.def=function () {
        $("#one").html(abc[i].name+" "+abc[i].date+" " +abc[i].assigned);
    } */
})
