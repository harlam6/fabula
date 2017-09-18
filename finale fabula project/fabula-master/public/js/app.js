   // -------------------------------------------Maps----------------------------------------//

      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.052, lng: -118.243},
          zoom: 12

        });
        infoWindow = new google.maps.InfoWindow;

  // var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  // var marker = new google.maps.Marker({
  //     position: coords,
  //     map: map,
  //     title:"You are here!"
  // });



//         var icons = {
//           tape: {
//             url: "http://i60.photobucket.com/albums/h28/theveryasian/tape%201.png?t=1505077772"
//           }
//         };


//         var features = [
//           {
//             position: new google.maps.LatLng(33.6461, -117.8427),
//             type: 'tape'
//           }, {
//             position: new google.maps.LatLng(33.7885, -117.8887),
//             type: 'tape'
//           }
//         ];

//         var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//       'sandstone rock formation in the southern part of the '+
//       'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//       'south west of the nearest large town, Alice Springs; 450&#160;km '+
//       '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//       'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//       'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//       'Aboriginal people of the area. It has many springs, waterholes, '+
//       'rock caves and ancient paintings. Uluru is listed as a World '+
//       'Heritage Site.</p>'+
//       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//       'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//       '(last visited June 22, 2009).</p>'+
//       '<audio controls>'+
//         '<source src="horse.mp3" type="audio/mpeg">'+
//         'Your browser does not support the audio element.'+
//       '</audio>'+
//       '</div>'+
//       '</div>';

//         // var infowindow = new google.maps.InfoWindow({
//         // content: contentString
//         // });

//         // Create markers.
//         features.forEach(function(feature) {
//           var marker = new google.maps.Marker({
//             position: feature.position,
//             icon: icons.tape,
//             map: map,
//           });
//            marker.addListener('click', function() {
//       infowindow.open(map, marker);
//       });
//         });


//         // add markers
//     google.maps.event.addListener(map, 'click', function (event) {
//         placeMarker(event.latLng);
//           saveMarker(event);
//          alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
//        });


//     //map.data.setControls(['Point']);
//     bindDataLayerListeners(map.data);

//     //load saved data
//     loadMarkers(map);



        // place marker function
  // function placeMarker(location) {
  //   var marker = new google.maps.Marker({
  //       position: location,
  //       map: map,
  //   });



//         // info window for marker functions
//     var infowindow = new google.maps.InfoWindow({
//         content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng() + '<audio controls>'+
//         '<source src="horse.mp3" type="audio/mpeg">'+
//         'Your browser does not support the audio element.'+
//       '</audio>'
//     });
//     infowindow.open(map, marker);
//     map.data.add(new google.maps.Data.Feature({properties:{},geometry:new google.maps.Data.Point(location)}));
// }


// function bindDataLayerListeners(dataLayer) {
//     dataLayer.addListener('addfeature', saveMarker);
//     dataLayer.addListener('removefeature', saveMarker);
//     //dataLayer.addListener('setgeometry', saveMarker);
// }


// //store to local host

// function saveMarker() {
//     map.data.toGeoJson(function (json) {
//         localStorage.setItem('geoData', JSON.stringify(json));
//     });
// }


// function clearMarkers() {
//     map.data.forEach(function (f) {
//         map.data.remove(f);
//     });
// }

// function loadMarkers(map) {
//     var data = JSON.parse(localStorage.getItem('geoData'));
//     map.data.addGeoJson(data);
// }

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };





var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

var everyPost = [];
           $.get("/api/posts/", function(response){
               everyPost.push([response[0].title, response[0].description]);
               console.log(response[0].title, response[0].description);
             
           // console.log(everyPost);


var contentString =  
'<div id="content">'+
      '<div id="siteNotice">'+
      '</div>' +
      '<div id="bodyContent">'+
      '<p><b>Title: </b>' + response[0].title + '<p><b>Description: </b> ' + response [0].description + 
      '<audio controls>'+
        '<source src="../assets/audio/rhcp.mp3" type="audio/mp3">'+
        'Your browser does not support the audio element.'+
      '</audio>'+
      '</div>'+
      '</div>'; 

        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });

 var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });

 marker.addListener('click', function() {
      infowindow.open(map, marker);
      });
 });


            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
            map.setCenter(pos);


          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } 
        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }






      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

