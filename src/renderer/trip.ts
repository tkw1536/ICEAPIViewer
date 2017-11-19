import { Trip } from "../api/trip";
import { StationNameRenderer } from "./station";
import { StopRenderer } from "./stop";

export function TripRenderer(trip: Trip) : JQuery<HTMLElement> {
    // a block to return as ouput
    let block = $('<div>');

    // render the basic trip info
    TripInfoRender(trip).appendTo($("<div class='row'>").appendTo(block));

    // create a row for stations, along with an index
    let tripRowDiv = $("<div class='row'>").appendTo($('<div>').appendTo(block));

    let contentDiv = $("<div class='col s12 m9 l10'>").appendTo(tripRowDiv);
    let stationList = $("<ul class='section table-of-contents pinned'>").appendTo($("<div class='col hide-on-small-only m3 l2'>").appendTo(tripRowDiv));

    trip.stops.forEach(function(v, i, a) {
        StopRenderer(v).appendTo(contentDiv);
        $("<a>").attr('href', '#' + v.station.evaNumber).text(v.station.name).appendTo($("<li>").appendTo(stationList));
    });
    
    return block;
}

function TripInfoRender(trip: Trip) : JQuery<HTMLElement> {
    return $("<div>").append(
        $("<h1>").text(trip.getTrainName()).append(
            $("<h4>").append(
                "from ", 
                StationNameRenderer(trip.firstStop.station), 
                " to ", 
                StationNameRenderer(trip.lastStop.station)
            )
        ), 
        $("<table>").append(
            $("<tr>").append(
                $("<td>").text('Distance travelled:'), 
                $("<td>").text((trip.actualPosition / 1000) + '/' + (trip.totalDistance / 1000)).append(' ').append('<b>km</b>')
            ), 
            $("<tr>").append(
                $("<td>").text('Distance since last stop:'), 
                $("<td>").text((trip.distanceFromLastStop / 1000)).append(' ').append('<b>km</b>')
            )
        )
    );
}