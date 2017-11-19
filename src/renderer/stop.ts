import { Stop } from "../api/stop";

export function StopRenderer(stop : Stop) : JQuery<HTMLElement> {

    // build information about the current track
    let trackInfo = $('<span>').append(
        $("<span class='new badge blue' data-badge-caption=''>").text('Track '+stop.schedule.actualTrack)
    ); 
    if(stop.schedule.isDifferentTrack())
        $("<span class='new badge grey' data-badge-caption='originally'>").text('Track '+stop.schedule.actualTrack).prependTo(trackInfo)
    
    // build links to the map of the station
    let StationLinks = $("<div class='card-action'>").append(
        $("<a target='_blank'>").text('Google Maps').attr('href', stop.station.GoogleMapsLink()), 
        ' ', 
        $("<a target='_blank'>").text('Open Street Map').attr('href', stop.station.OpenStreetMapLink())
    );

    // setup the card colors based on if we passed or not
    let cardColor = stop.passed ? 'blue-grey darken-1' : '';
    let textColor = stop.passed ? 'white-text' : ''; 

    // create a block for arrival and delay times
    let scheduleBlock = $("<p>").append("<hr>");

    // render the arrival time
    if(stop.schedule.scheduledArrivalTime){
        let arrivalBlock = $("<p>").text('Arrival at ').append(
            $('<span>').text(stop.schedule.actualArrivalTime.toLocaleString())
        )
        if(stop.schedule.isDelayedArrival()){
            $("<span class='new badge red' data-badge-caption=''>").text(stop.schedule.arrivalDelay).appendTo(arrivalBlock);
        }

        scheduleBlock.append(arrivalBlock)
    }

    // render the departure time
    if(stop.schedule.scheduledDepartureTime){
        let departureBlock = $("<p>").text('Departure at ').append(
            $('<span>').text(stop.schedule.actualDepartureTime.toLocaleString())
        )
        if(stop.schedule.isDelayedDeparture()){
            $("<span class='new badge red' data-badge-caption=''>").text(stop.schedule.departureDelay).appendTo(departureBlock);
        }

        scheduleBlock.append(departureBlock)
    }


    // put all the information together
    return $("<div class='section scrollspy'>").attr('id', stop.station.evaNumber).append(            
        $("<div class='card hoverable "+ cardColor +"'>").append(
            $("<div class='card-content "+ textColor +"'>").append(
                $("<span class='card-title'>").text(stop.station.name).append(' ').append(trackInfo), 
                scheduleBlock
            ), 
            StationLinks
        )
    );
}