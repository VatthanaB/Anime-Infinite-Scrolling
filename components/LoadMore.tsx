"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let page = 0;
interface Props {
  order: string;
}

export type AnimeCard = JSX.Element;
function LoadMore({ order }: Props) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(page, order).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView, data, order]);

  useEffect(() => {
    setData([]);
    page = 0;
  }, [order]);
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

export default LoadMore;
