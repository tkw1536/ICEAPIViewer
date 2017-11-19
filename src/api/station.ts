export interface StationDescription {
    evaNr: string, 
    name: string, 
    geocoordinates: StationGeoCoordinates
}

interface StationGeoCoordinates {
    latitude: number, 
    longitude: number
}

export class Station {
    constructor(station: StationDescription) {
        this.evaNumber = station.evaNr;
        this.name = station.name.replace('.', '. ').replace('(', ' (').replace(')', ') ').trim();
        this.coordinates = station.geocoordinates;
    }

    evaNumber: string;
    name: string;

    coordinates: StationGeoCoordinates;
    GoogleMapsLink() : string {
        return `https://www.google.com/maps/search/?api=1&query=${this.coordinates.latitude},${this.coordinates.latitude}`;
    }
    OpenStreetMapLink() : string {
        return `http://www.openstreetmap.org/?lat=${this.coordinates.latitude}&lon=${this.coordinates.latitude}&zoom=17&layers=M`;
    }

}