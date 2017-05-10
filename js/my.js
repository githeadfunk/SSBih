
var myCenter = new google.maps.LatLng(37.422230, -122.084058);
function initialize(){
    var mapProp = {
        center:myCenter,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),mapProp);

    var marker = new google.maps.Marker({
        position:myCenter,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);



//$(document).ready(function(){
//                $(".navList").click(function(){
//                    $(".navList").css('background', 'red');
//                });
//            });