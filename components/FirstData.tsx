// Import necessary modules and functions
import { fetchAnime } from "@/app/action";
import React from "react";

// Define the FirstData component
const FirstData = async () => {
  // Fetch the first page of anime data, ordered by popularity
  const data = await fetchAnime(1, "popularity");

  // Render the fetched data in a grid
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data}
    </section>
  );
};

// Export the FirstData component
export default FirstData;
