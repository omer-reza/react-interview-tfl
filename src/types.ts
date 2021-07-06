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

export type ArrivalTimeResponseItem = {
  destinationName: string;
  destinationNaptanId: string;
  platformName: string;
  expectedArrival: string;
  timeToStation: number;
  direction: string;
  lineId: string;
  lineName: string;
  currentLocation: string;
};
