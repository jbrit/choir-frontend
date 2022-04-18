export function createRehearsalData(
  name: string,
  date: string,
  startTime: string,
  endTime: string,
  attended: boolean,
) {
  return { name, date, startTime, endTime,  attended };
}

export function createSongData(
  name: string,
  artist: string,
  lyrics: string
) {
  return { name, artist, lyrics };
}