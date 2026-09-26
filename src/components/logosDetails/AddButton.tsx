"use client";

import { LogosContext } from "@/context/LogosContext";
import { ILogo } from "@/types/logos.types";
import React, { useContext } from "react";

const AddButton = ({ logo }: { logo: ILogo }) => {
  const context = useContext(LogosContext);

  if (!context) {
    throw new Error("AddButton must be used inside LogosProvider");
  }

  const { LogosData, addToPlan } = context;

  const alreadyAdded = LogosData.some(
    (item) => item.id === logo.id
  );

  const planFull =
    LogosData.length >= 5 && !alreadyAdded;

  const handleAddToPlan = () => {
    addToPlan(logo);
  };

  return (
    <button
      type="button"
      className="btn w-full border-none bg-[#b8ff00] text-black hover:bg-[#a8ed00] sm:w-auto"
      onClick={handleAddToPlan}
    >
      {alreadyAdded
        ? "✓ Added to plan"
        : planFull
          ? "Plan is full"
          : "+ Add to today's plan"}
    </button>
  );
};

export default AddButton;