import { Stop, StopDescription } from "./stop";

export interface TripDescription {
    tripDate: string,
    trainType: string, 
    vzn: string, 

    actualPosition: number, 
    distanceFromLastStop: number,
    totalDistance: number, 

    stopInfo: {
        scheduledNext: string,
        actualNext: string, 

        actualLast: string,
        actualLastStarted: string, 

        finalStationName: string,
        finalStationEvaNr: string
    },

    stops: StopDescription[]
}

export class Trip {
    constructor(trip: TripDescription){
        // get and parse the trip date
        let tripMatch = trip.tripDate.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
        this.date = new Date(parseInt(tripMatch[1]), parseInt(tripMatch[2]) - 1, parseInt(tripMatch[3]) - 1);
        
        // store the type and vzn
        this.type = trip.trainType;
        this.vzn = trip.vzn;

        // store the position and distances
        this.actualPosition = trip.actualPosition;
        this.distanceFromLastStop = trip.distanceFromLastStop;
        this.totalDistance = trip.totalDistance;

        // store all the stops
        this.stops = trip.stops.map((v, i, a) => new Stop(v))

        // store the last stop
        this.actualLastStop = this.getStopByNumber(trip.stopInfo.actualLast);
        this.actualLastStartedStop = this.getStopByNumber(trip.stopInfo.actualLastStarted);

        // store the next stop
        this.scheduledNextStop = this.getStopByNumber(trip.stopInfo.scheduledNext);
        this.actualNextStop = this.getStopByNumber(trip.stopInfo.actualNext);
        
        // store the initial stop
        this.firstStop = this.stops[0];

        // store the final stop
        this.lastStop = this.getStopByNumber(trip.stopInfo.finalStationEvaNr);
    }
    
    date: Date
    
    type: string
    vzn: string
    getTrainName() : string { return `${this.type} ${this.vzn}`; }

    actualPosition: number
    distanceFromLastStop: number
    totalDistance: number

    actualLastStop: Stop
    actualLastStartedStop: Stop

    scheduledNextStop: Stop
    actualNextStop: Stop

    firstStop: Stop
    lastStop: Stop

    stops: Stop[]
    getStopByNumber(evaNumber: string) : Stop {
        return this.stops.filter((v, i, a) => v.station.evaNumber == evaNumber)[0];
    }
}