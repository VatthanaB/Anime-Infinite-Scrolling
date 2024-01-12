"use client";
import LoadMore from "@/components/LoadMore";
import React, { useState } from "react";

const Main = () => {
  const [selectedValue, setSelectedValue] = useState("popularity");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <select
          className="select select-sm w-full max-w-xs"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option disabled>Sort</option>
          <option value="popularity">Popularity</option>
          <option value="ranked">Ranked</option>
          <option value="name">alphabetical</option>
          <option value="episodes">number of episodes</option>
          <option value="random">Random</option>
        </select>
      </div>

      <LoadMore order={selectedValue} />
    </div>
  );
};

export default Main;
