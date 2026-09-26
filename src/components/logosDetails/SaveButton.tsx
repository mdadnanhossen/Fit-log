"use client";

import React, { useContext } from "react";
import { LogosContext } from "@/context/LogosContext";
import { ILogo } from "@/types/logos.types";

const SaveButton = ({ logo }: { logo: ILogo }) => {
  const context = useContext(LogosContext);

  if (!context) {
    throw new Error("SaveButton must be used inside LogosProvider");
  }

  const { SavedData, saveForLater } = context;

  const alreadySaved = SavedData.some(
    (item) => item.id === logo.id
  );

  const handleSave = () => {
    saveForLater(logo);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="btn w-full border border-[#292c32] bg-transparent text-white hover:border-[#b8ff00] hover:bg-[#18270b] hover:text-[#b8ff00] sm:w-auto"
    >
      {alreadySaved
        ? "🔖 Saved"
        : "🔖 Save for later"}
    </button>
  );
};

export default SaveButton;