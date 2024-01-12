import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";

import { fetchAnime } from "./action";
import { data } from "./_data";
import { useState } from "react";
import { OrderProvider } from "@/components/OrderContext";
import FirstData from "@/components/FirstData";
import SelectComponent from "@/components/SelectComponent";

// eslint-disable-next-line @next/next/no-async-client-component
async function Home() {
  return (
    <OrderProvider>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <div className="flex justify-between ">
          {" "}
          <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
          <SelectComponent />
        </div>

        <FirstData />
        <LoadMore />
      </main>
    </OrderProvider>
  );
}

export default Home;
