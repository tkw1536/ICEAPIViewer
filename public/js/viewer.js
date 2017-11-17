$(function(){
    // for now we just have some static json
    // going to replace this with fetching later on. 
    var theJSON = {"tripDate":"2017-11-17","trainType":"ICE","vzn":"20","actualPosition":241360,"distanceFromLastStop":9823,"totalDistance":632613,"stopInfo":{"scheduledNext":"8000301_00","actualNext":"8000301_00","actualLast":"8000298_00","actualLastStarted":"8000301","finalStationName":"Frankfurt(Main)Hbf","finalStationEvaNr":"8000105_00"},"stops":[{"station":{"evaNr":"8103000_00","name":"Wien Hbf","geocoordinates":{"latitude":48.184925,"longitude":16.375865}},"timetable":{"scheduledArrivalTime":null,"actualArrivalTime":null,"arrivalDelay":"","scheduledDepartureTime":1510933800000,"actualDepartureTime":1510933800000,"departureDelay":""},"track":{"scheduled":"5A-C","actual":"5A-C"},"info":{"status":0,"passed":true,"distance":0,"distanceFromStart":0},"delayReasons":null},{"station":{"evaNr":"8100514_00","name":"Wien Meidling","geocoordinates":{"latitude":48.174449,"longitude":16.333088}},"timetable":{"scheduledArrivalTime":1510934100000,"actualArrivalTime":1510934100000,"arrivalDelay":"","scheduledDepartureTime":1510934220000,"actualDepartureTime":1510934220000,"departureDelay":""},"track":{"scheduled":"5","actual":"5"},"info":{"status":0,"passed":true,"distance":3380,"distanceFromStart":3380},"delayReasons":null},{"station":{"evaNr":"8100008_00","name":"St.Pölten Hbf","geocoordinates":{"latitude":48.208303,"longitude":15.624672}},"timetable":{"scheduledArrivalTime":1510935660000,"actualArrivalTime":1510936500000,"arrivalDelay":"+14","scheduledDepartureTime":1510935780000,"actualDepartureTime":1510936560000,"departureDelay":"+13"},"track":{"scheduled":"5","actual":"5"},"info":{"status":0,"passed":true,"distance":52663,"distanceFromStart":56043},"delayReasons":null},{"station":{"evaNr":"8100013_00","name":"Linz Hbf","geocoordinates":{"latitude":48.290181,"longitude":14.292131}},"timetable":{"scheduledArrivalTime":1510938780000,"actualArrivalTime":1510939320000,"arrivalDelay":"+9","scheduledDepartureTime":1510939020000,"actualDepartureTime":1510939500000,"departureDelay":"+8"},"track":{"scheduled":null,"actual":""},"info":{"status":0,"passed":true,"distance":99112,"distanceFromStart":155155},"delayReasons":null},{"station":{"evaNr":"8100014_00","name":"Wels Hbf","geocoordinates":{"latitude":48.166078,"longitude":14.026569}},"timetable":{"scheduledArrivalTime":1510939860000,"actualArrivalTime":1510940280000,"arrivalDelay":"+7","scheduledDepartureTime":1510939980000,"actualDepartureTime":1510940280000,"departureDelay":"+5"},"track":{"scheduled":"5","actual":"5"},"info":{"status":0,"passed":true,"distance":24036,"distanceFromStart":179191},"delayReasons":null},{"station":{"evaNr":"8000298_00","name":"Passau Hbf","geocoordinates":{"latitude":48.573632,"longitude":13.450776}},"timetable":{"scheduledArrivalTime":1510942680000,"actualArrivalTime":1510942860000,"arrivalDelay":"+3","scheduledDepartureTime":1510943040000,"actualDepartureTime":1510943160000,"departureDelay":"+2"},"track":{"scheduled":"2","actual":"2"},"info":{"status":0,"passed":true,"distance":62169,"distanceFromStart":241360},"delayReasons":null},{"station":{"evaNr":"8000301_00","name":"Plattling","geocoordinates":{"latitude":48.779619,"longitude":12.86394}},"timetable":{"scheduledArrivalTime":1510944960000,"actualArrivalTime":1510945080000,"arrivalDelay":"+2","scheduledDepartureTime":1510945080000,"actualDepartureTime":1510945080000,"departureDelay":""},"track":{"scheduled":"4","actual":"4"},"info":{"status":0,"passed":false,"distance":48810,"distanceFromStart":290170},"delayReasons":null},{"station":{"evaNr":"8000309_00","name":"Regensburg Hbf","geocoordinates":{"latitude":49.011672,"longitude":12.099617}},"timetable":{"scheduledArrivalTime":1510946820000,"actualArrivalTime":1510946880000,"arrivalDelay":"+1","scheduledDepartureTime":1510946940000,"actualDepartureTime":1510946940000,"departureDelay":""},"track":{"scheduled":"5","actual":"5"},"info":{"status":0,"passed":false,"distance":61562,"distanceFromStart":351732},"delayReasons":null},{"station":{"evaNr":"8000284_00","name":"Nürnberg Hbf","geocoordinates":{"latitude":49.445616,"longitude":11.082989}},"timetable":{"scheduledArrivalTime":1510950360000,"actualArrivalTime":1510950420000,"arrivalDelay":"+1","scheduledDepartureTime":1510950540000,"actualDepartureTime":1510950540000,"departureDelay":""},"track":{"scheduled":"6","actual":"6"},"info":{"status":0,"passed":false,"distance":88217,"distanceFromStart":439949},"delayReasons":null},{"station":{"evaNr":"8000260_00","name":"Würzburg Hbf","geocoordinates":{"latitude":49.801796,"longitude":9.93578}},"timetable":{"scheduledArrivalTime":1510953900000,"actualArrivalTime":1510954020000,"arrivalDelay":"+2","scheduledDepartureTime":1510954020000,"actualDepartureTime":1510954020000,"departureDelay":""},"track":{"scheduled":"4","actual":"4"},"info":{"status":0,"passed":false,"distance":91662,"distanceFromStart":531611},"delayReasons":null},{"station":{"evaNr":"8000010_00","name":"Aschaffenburg Hbf","geocoordinates":{"latitude":49.980557,"longitude":9.143697}},"timetable":{"scheduledArrivalTime":1510956360000,"actualArrivalTime":1510956420000,"arrivalDelay":"+1","scheduledDepartureTime":1510956480000,"actualDepartureTime":1510956540000,"departureDelay":"+1"},"track":{"scheduled":"8","actual":"8"},"info":{"status":0,"passed":false,"distance":60139,"distanceFromStart":591750},"delayReasons":null},{"station":{"evaNr":"8000150_00","name":"Hanau Hbf","geocoordinates":{"latitude":50.120953,"longitude":8.929}},"timetable":{"scheduledArrivalTime":1510957200000,"actualArrivalTime":1510957320000,"arrivalDelay":"+2","scheduledDepartureTime":1510957320000,"actualDepartureTime":1510957440000,"departureDelay":"+2"},"track":{"scheduled":"102","actual":"102"},"info":{"status":0,"passed":false,"distance":21885,"distanceFromStart":613635},"delayReasons":null},{"station":{"evaNr":"8000105_00","name":"Frankfurt(Main)Hbf","geocoordinates":{"latitude":50.107145,"longitude":8.663789}},"timetable":{"scheduledArrivalTime":1510958400000,"actualArrivalTime":1510958520000,"arrivalDelay":"+2","scheduledDepartureTime":null,"actualDepartureTime":null,"departureDelay":""},"track":{"scheduled":"9","actual":"9"},"info":{"status":0,"passed":false,"distance":18978,"distanceFromStart":632613},"delayReasons":null}]};
    
    render(theJSON, $("#body"))
});

function render(json, element){

    // clear element
    element.empty();

    // general information
    var trainType = json['trainType'];
    var trainNumber = json['vzn'];

    var distanceTravelled = json['actualPosition'] / 1000;
    var fromLastStopTravelled = json['distanceFromLastStop'] / 1000;    
    var totalDistance = json['totalDistance'] / 1000;

    var finalStopName = json['stopInfo']['finalStationName'];
    var finalStopEva = json['stopInfo']['finalStationEvaNr'];

    element.append(
        $("<div>").append(
            $("<h1>").text(trainType + ' ' + trainNumber).append($("<h4>").text("to ").append(renderStopByName(finalStopName, finalStopEva))), 
            $("<table>").append(
                $("<tr>").append(
                    $("<td>").text('Distance travelled:'), 
                    $("<td>").text(distanceTravelled + '/' + totalDistance).append(' ').append('<b>km</b>')
                ), 
                $("<tr>").append(
                    $("<td>").text('Distance since last stop:'), 
                    $("<td>").text(fromLastStopTravelled).append(' ').append('<b>km</b>')
                )
            )
        ), 
        $("<h2>").text("Stops")
    )
    
    var stops = json['stops'];
    
    for(var i = 0; i < stops.length; i++){
        element.append(renderStopFull(stops[i]));
    }
}

function renderStopByName(name, eva){
   return $("<span>").append(
       $("<span class='chip'>").text(name)
   );
}

function renderStopFull(stop){

    // station name and eva number
    var statName = stop['station']['name'];
    var evaNr = stop['station']['evaNr'];

    // arrival
    var scheduledArrivalTime = stop['timetable']['scheduledArrivalTime'] && new Date(stop['timetable']['scheduledArrivalTime']).toString(); 
    var actualArrivalTime = stop['timetable']['actualArrivalTime'] && new Date(stop['timetable']['actualArrivalTime']).toString(); 
    var arrivalDelay = stop['timetable']['arrivalDelay'];

    // departure
    var scheduledDepartureTime = stop['timetable']['scheduledDepartureTime'] && new Date(stop['timetable']['scheduledDepartureTime']).toString(); 
    var actualDepartureTime = stop['timetable']['actualDepartureTime'] && new Date(stop['timetable']['actualDepartureTime']).toString(); 
    var departureDelay = stop['timetable']['departureDelay'];

    // track
    var scheduledTrack = stop['track']['scheduled'];
    var actualTrack = stop['track']['actual'];

    // passing
    var passed = stop['info']['passed'];

    return $("<div class='row'>").append(
        $("<div class='col s12 m12'>").append(
            $("<div class='card blue-grey darken-1'>").append(
                $("<div class='card-content white-text'>").append(
                    $("<span class='card-title'>").text(statName), 
                    $("<p>").append(
                        $("<span>").text("Track "+(actualTrack || scheduledTrack)), $("<br />"), 
                        $("<span>").text("Arrival at "+actualArrivalTime), $("<br />"), 
                        $("<span>").text("Depature at "+actualDepartureTime), $("<br />"), 
                    )
                )
            )
        )
    );
}