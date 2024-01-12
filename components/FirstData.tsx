"use client";
import { data } from "@/app/_data";
import React from "react";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";

const FirstData = () => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data}
    </section>
  );
};

export default FirstData;
