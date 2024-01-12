import React from "react";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";

const SelectComponent = () => {
  const { selectedOrder, handleChange } = useContext(OrderContext);
  return (
    <select
      className="select select-bordered w-full select-sm max-w-xs"
      value={selectedOrder}
      onChange={handleChange}
    >
      <option disabled value="">
        Sort by
      </option>
      <option value="ranked">ranked</option>
      <option value="popularity">popularity</option>
      <option value="name">name</option>
      <option value="episodes">episodes</option>
      <option value="random">random</option>
    </select>
  );
};

export default SelectComponent;
