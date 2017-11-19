import { StationDescription, Station } from './station';
import { ScheduleDescription, TrackScheduleDescription, Schedule, DelayReason } from './schedule';

export interface StopDescription {
    station: StationDescription, 

    timetable: ScheduleDescription, 
    track: TrackScheduleDescription, 

    info: {  
        status: number,
        passed: boolean,
        distance: number, 
        distanceFromStart: number
     },
     
     delayReasons: DelayReason[]|null
}

export class Stop {
    constructor(stop: StopDescription) {
        // store station and schedule
        this.station = new Station(stop.station);
        this.schedule = new Schedule(stop.timetable, stop.track, stop.delayReasons);

        this.passed = stop.info.passed;
        this.distance = stop.info.distance;
        this.distanceFromStart = stop.info.distanceFromStart;
    }

    station: Station
    schedule: Schedule

    passed: boolean
    distance: number
    distanceFromStart: number
}