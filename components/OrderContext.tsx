"use client";
import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";

type OrderContextType = {
  selectedOrder: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

type OrderProviderProps = {
  children: ReactNode;
};

export function OrderProvider({ children }: OrderProviderProps) {
  const [selectedOrder, setSelectedOrder] = useState("popularity");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(event.target.value);
  };

  return (
    <OrderContext.Provider value={{ selectedOrder, handleChange }}>
      {children}
    </OrderContext.Provider>
  );
}
