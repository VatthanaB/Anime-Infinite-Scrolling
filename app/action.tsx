// Use the server-side environment
"use server";

// Import necessary components and types
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Define the fetchAnime function
export const fetchAnime = async (page: number, order: string) => {
  // Fetch anime data from the API
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=${order}`
  );

  // Parse the response data as JSON
  const data = await response.json();

  // Map the data to AnimeCard components
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
