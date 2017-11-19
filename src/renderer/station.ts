import { Station } from "../api/station";

export function StationNameRenderer(station: Station) : JQuery<HTMLElement> {
    return $("<span class='chip'>").text(station.name);
}