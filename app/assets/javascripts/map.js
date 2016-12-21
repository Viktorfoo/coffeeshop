
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
      //= require bootstrap2-toggle

      var map;
      var infowindow;

      var testVar;
      var gmarker1 = new Array();
      var gmarker1wifi = new Array();
      var gmarker1power_outlet = new Array();
      var gmarker1new_cafe = new Array();
      var gmarker1trend = new Array();
      var gmarker1low_crowd = new Array();

      var gmarker1wifi_status = "false"
      var gmarker1power_outlet_status = "false"
      var gmarker1new_cafe_status = "false"
      var gmarker1trend_status = "false"
      var gmarker1low_crowd_status = "false"
      var filterall1 = "false"



      function initMap() {
        
        //it gets your current geolocation coordinates
        navigator.geolocation.getCurrentPosition(showPosition);
        //navigator.geolocation.getCurrentPosition(showPosition);


      }

      function showPosition(position)
      {
        //var pyrmont = {lat: position.coords.latitude, lng: position.coords.longitude};
        var pyrmont = {lat: 1.290426, lng: 103.8474353};
        //1.290426,103.8474353
        //Simple Google Map -- Creates a Google Map
        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          scrollwheel: false,
          streetViewControl: false,
          zoomControl: {
              buttonSize: "62"
          },       
           styles: [
              {
                featureType : "poi.place_of_worship",
                elementType: "labels",
                stylers: [
                  { visibility: "off" }
                ]
              },
              {
                featureType : "poi.attraction",
                elementType: "labels",
                stylers: [
                  { visibility: "off" }
                ]
              }
            ], 
          zoom: 15      
        });

        var pyrmont = {lat: 1.290426, lng: 103.8494353};
        
        var marker = new google.maps.Marker({

          position: pyrmont,
          //content: '<i class="fa fa-map-pin" aria-hidden="true"></i>',      
          icon: "/assets/current_pin.png",
          map: map
          
   
        });

        infowindow = new google.maps.InfoWindow();

        //Google Search Place API
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 500
        }, callback);
        
        //Foursquare Search Place API
      }


      function callback(results, status) {
         // $.ajax({url:'http://localhost:3000/coffeeshop/show4square?lat=103.8473175&lon=1.2921502&distance=1000', success: createMarker4Square});
        $.ajax({url:'show4square?lat=103.8474353&lon=1.290426&distance=1000', success: createMarker4Square});
         
      }

      function createMarker_bk(place) {
        //var placeLoc = {lat: 1.2921502 ,lng: 103.8473175};
        var pyrmont = new google.maps.LatLng(place.latitude,place.longitude);
        var marker = new google.maps.Marker({
          map: map,
          position: pyrmont
        });

        testVar = pyrmont

        google.maps.event.addListener(marker, 'click', function() {
          handleClickMarker(place.name, this);
        });
      }


      function createMarker(place) {
        //var placeLoc = {lat: 1.2921502 ,lng: 103.8473175};
        //testVar = pyrmont
        //if(place.wifi == 0){
    
        var pyrmont = new google.maps.LatLng(place.latitude,place.longitude);
        
        var marker = new google.maps.Marker({

          position: pyrmont,
          //content: '<i class="fa fa-map-pin" aria-hidden="true"></i>',
          icon: "/assets/map_pin.png",

          map: map
          
   
        });
   //map: map,
  //icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    //icon: '/assets/cafe-small.png', 

          google.maps.event.addListener(marker, 'click', function() {
            window.location.href = '/main_map#signuppage'
            handleClickMarker(place.name, this);
          });
          gmarker1.push(marker);
          gmarker1wifi.push(place.wifi);
          gmarker1power_outlet.push(place.power_outlet);
          gmarker1new_cafe.push(place.new_cafe);
          gmarker1trend.push(place.trending);
          gmarker1low_crowd.push(place.crowd.toString());


        //}

      }
      
      filterMarkersWifi = function (filtermarker)
      {

          //gmarker1wifi_status
          //gmarker1power_outlet_status
          //gmarker1new_cafe_status
          //gmarker1trend_status
          //alert("1 " + gmarker1.length);
          console.log("Filter " + filtermarker);

          if (filtermarker ==true)
          { 
            gmarker1wifi_status = true

            console.log("Check is true ");
           for (var i = 0; i < gmarker1.length; i++) {
            
            if (gmarker1wifi[i] == true) 
            {
                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          gmarker1wifi_status =false

          for (var i = 0; i < gmarker1.length; i++) {
           
              
              gmarker1[i].setVisible(true)        
            


          }

        }
          
      }

      filterMarkersWifi_1 = function (filtermarker)
      {

          //gmarker1wifi_status
          //gmarker1power_outlet_status
          //gmarker1new_cafe_status
          //gmarker1trend_status
          //alert("1 " + gmarker1.length);
          console.log("Filter " + filtermarker);

          if (filtermarker ==true)
          { 
            gmarker1wifi_status = true

            console.log("Check is true ");
           for (var i = 0; i < gmarker1.length; i++) {
            
            if (gmarker1wifi[i] == true) 
            {
                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          gmarker1wifi_status =false

          for (var i = 0; i < gmarker1.length; i++) {
           
              
              gmarker1[i].setVisible(true)        
            


          }

        }
          
      }
      
      filterMarkersPower_Outlet = function (filtermarker)
      {
          //alert("1 " + gmarker1.length);
          console.log("Power Outlet " + filtermarker);

          if (filtermarker ==true)
          {  
            console.log("Power Outlet Check is true ");
           for (var i = 0; i < gmarker1.length; i++) {
            
            if (gmarker1new_cafe[i] == true) 
            {
                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          for (var i = 0; i < gmarker1.length; i++) {
           
              
              gmarker1[i].setVisible(true)        
            


          }

        }
          
      }


      filterMarkersNew_Cafes = function (filtermarker)
      {
          //alert("1 " + gmarker1.length);
          console.log("New Cafes " + filtermarker);

          if (filtermarker ==true)
          {  
            console.log("New Cafe is true ");
           for (var i = 0; i < gmarker1.length; i++) {
            
            if (gmarker1power_outlet[i] == true) 
            {
                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          for (var i = 0; i < gmarker1.length; i++) {
           
              
              gmarker1[i].setVisible(true)        
            


          }

        }
          
      }

      filterMarkersTrend = function (filtermarker)
      {
          //alert("1 " + gmarker1.length);
          console.log("Trend " + filtermarker);

          if (filtermarker ==true)
          {  
            console.log("Trend is True ");
           for (var i = 0; i < gmarker1.length; i++) {
            
            if (gmarker1trend[i] == true) 
            {
                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          for (var i = 0; i < gmarker1.length; i++) {
        
              gmarker1[i].setVisible(true)        

          }

        }

      }

      filterMarkersLowCrowd = function (filtermarker)
      {
          //alert("1 " + gmarker1.length);
          console.log("Low Crowd " + filtermarker);

          if (filtermarker ==true)
          {  
            console.log("Low Crowd is True ");
           for (var i = 0; i < gmarker1.length; i++) {
            

            if (gmarker1low_crowd_status[i] > 0) 
            {
              console.log("Crowd Status True" + gmarker1low_crowd_status[i].toString());                          
              gmarker1[i].setVisible(true)        
            }
            else
            {
              console.log("Crowd Status False " + gmarker1low_crowd_status[i].toString());  
            
              gmarker1[i].setVisible(false)
            }


          }
        }
        else
        {
          for (var i = 0; i < gmarker1.length; i++) {
        
              gmarker1[i].setVisible(true)        

          }

        }

      }


      filterAll = function ()
      {
          
        for (var i = 0; i < gmarker1.length; i++) 
        {
            
          if (gmarker1trend[i] == true ) 
          {
                          
            gmarker1[i].setVisible(true)        
          }
          else
          {
            
            gmarker1[i].setVisible(false)
          }


        }    
          
      }
      filterMarkersReset =function()
      {
        gmarker1wifi_status = "false"
        gmarker1power_outlet_status = "false"
        gmarker1new_cafe_status = "false"
        gmarker1trend_status = "false"
        gmarker1low_crowd_status = "false" 
        $('#type_lowcrowd1').bootstrapToggle('off');
         $('#type_wifi1').bootstrapToggle('off');
          $('#type_power_outlet').bootstrapToggle('off');
           $('#type_newcafes_outlet').bootstrapToggle('off');
            $('#type_trend').bootstrapToggle('off');
        //document.getElementById('type_lowcrowd1').checked=false;
       // document.getElementById('type_wifi1').checked=false;
        //document.getElementById('type_power_outlet').checked=false;
        //document.getElementById('type_newcafes_outlet').checked=false;
        //document.getElementById('type_trend').checked=false;
        
        
        for (var i = 0; i < gmarker1.length; i++) 
        {
                                              
            gmarker1[i].setVisible(true);
                 
        } 
      }



      function createMarker4Square(data)
      {
        //console.log(data);
           // gmarker = data;
  
           for (var i = 0; i < data.length; i++) {

            createMarker(data[i]);
          }
                 
      }

      function handleClickMarker(placeName, objThis)
      {
        //gooinfowindow.setContent("<h3>No Plug</h3><img src='http://www.thisiscolossal.com/wp-content/uploads/2014/03/130407.gif' width='20px' /><br/>" + placeName);
          //infowindow.setContent("Map");
        //infowindow.open(map, objThis);
        show('popup2');
      }


    var show = function(id) {
    document.getElementById(id).style.display ='block';
    }
    var hide = function(id) {
    document.getElementById(id).style.display ='none';
    }


















