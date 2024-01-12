import { fetchAnime } from "@/app/action";
import React from "react";

const FirstData = async () => {
  const data = await fetchAnime(1, "popularity");
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data}
    </section>
  );
};

export default FirstData;
