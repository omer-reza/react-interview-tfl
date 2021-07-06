export type Mode =
  | "dlr"
  | "tube"
  | "bus"
  | "cable-car"
  | "coach"
  | "cycle"
  | "cycle-hire"
  | "tram"
  | "tube"
  | "walking"
  | "";

export type Station = {
  naptan: string;
  name: string;
  mode: Mode;
};

export type ArrivalTimeData = {
  destination: string;
  timeToStation: number;
  direction: string;
  currentLocation: string;
  lineId: string;
  lineName: string;
  expectedArrival: string;
  platformName: string;
};
