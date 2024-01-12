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
      <div className=" space-y-5 md:space-y-0 lg:flex justify-center items-center   md:justify-between mb-10 md:mb-5 ">
        <h2 className="text-3xl text-white font-bold self">Explore Anime</h2>

        <select
          className="select md:select-sm w-full max-w-xs"
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
