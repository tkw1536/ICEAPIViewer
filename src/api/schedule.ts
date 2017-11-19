export interface ScheduleDescription {
    scheduledArrivalTime: number|null, 
    actualArrivalTime: number|null, 
    arrivalDelay: string, 
    scheduledDepartureTime: number|null, 
    actualDepartureTime: number|null, 
    departureDelay: string
}

export interface TrackScheduleDescription {
    actual: string|null, 
    scheduled: string
}

export interface DelayReason {
    code: string, 
    text: string
}

export class Schedule {
    constructor(schedule: ScheduleDescription, track: TrackScheduleDescription, delayReasons: DelayReason[]|null) {
        // store the arrival information
        this.scheduledArrivalTime = (typeof schedule.scheduledArrivalTime === 'number') ? new Date(schedule.scheduledArrivalTime) : null;
        this.actualArrivalTime = (typeof schedule.actualArrivalTime === 'number') ? new Date(schedule.actualArrivalTime) : null;
        this.arrivalDelay = schedule.arrivalDelay;

        // store the departure information
        this.scheduledDepartureTime = (typeof schedule.scheduledDepartureTime === 'number') ? new Date(schedule.scheduledDepartureTime) : null;
        this.actualDepartureTime = (typeof schedule.actualDepartureTime === 'number') ? new Date(schedule.actualDepartureTime) : null;
        this.departureDelay = schedule.departureDelay;

        // store the track information
        this.scheduledTrack = track.scheduled;
        this.actualTrack = track.actual || track.scheduled;

        // store the delay reasons
        this.delayReasons = (delayReasons === null) ? [] : delayReasons;
    }

    scheduledArrivalTime: Date|null
    actualArrivalTime: Date|null
    arrivalDelay: string
    isDelayedArrival() : boolean { return this.arrivalDelay != ''; }

    scheduledDepartureTime: Date|null
    actualDepartureTime: Date|null
    departureDelay: string
    isDelayedDeparture() : boolean {return this.departureDelay != '';}
    
    scheduledTrack: string
    actualTrack: string
    isDifferentTrack() : boolean { return this.scheduledTrack != this.actualTrack }

    delayReasons: DelayReason[]
}