import { api } from "../utils/api";


export type Song = {
    id: number;
    name: string;
    artist: string;
    link: string;
    category: "Suggested" | "Concert" | "Upcoming";
    lyrics: string;
}

export async function getSongs(): Promise<Song[]> {
  const response = await api.request<Song[]>("/songs/", {
    requiresAuthentication: true,
    method: "GET",
  });
  return response.data;
}
