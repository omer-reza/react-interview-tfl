import { tubeStations } from "./ref-data";

export const lookupStations = async (searchText: string) => {
  return await tubeStations.filter((s) =>
    s.name
      .toLowerCase()
      .replace(".", "")
      .replace("'", "")
      .includes(searchText.toLowerCase().replace(".", "").replace("'", ""))
  );
};
