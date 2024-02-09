// Use the client-side environment
"use client";

// Import necessary modules and components
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

// Initialize page variable
let page = 0;

// Define the props for the LoadMore component
interface Props {
  order: string;
}

// Define the AnimeCard type
export type AnimeCard = JSX.Element;

// Define the LoadMore component
function LoadMore({ order }: Props) {
  // Use the useInView hook to get a ref and a boolean indicating whether the component is in view
  const { ref, inView } = useInView();

  // Declare a state variable for the fetched anime data
  const [data, setData] = useState<AnimeCard[]>([]);

  // Fetch the next page of anime data when the component comes into view
  useEffect(() => {
    if (inView) {
      fetchAnime(page, order).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView, data, order]);

  // Reset the data and page variables when the order prop changes
  useEffect(() => {
    setData([]);
    page = 0;
  }, [order]);

  // Render the fetched anime data and a loading spinner
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <span className="loading loading-spinner text-error w-12"></span>
        </div>
      </section>
    </>
  );
}

// Export the LoadMore component
export default LoadMore;
