"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";

let page = 1;
export type AnimeCard = JSX.Element;

function LoadMore() {
  const { selectedOrder } = useContext(OrderContext);
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(page, selectedOrder).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView, data, order]);
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
