import { Song } from "./actions/songs";

export function createRehearsalData(
  name: string,
  date: string,
  startTime: string,
  endTime: string,
  attended: boolean
) {
  return { name, date, startTime, endTime, attended };
}

export function createSongsData(
  songs: Song[] | undefined,
  category: Song["category"]
) {
  return songs?.filter((s) => s.category === category) ?? [];
}
