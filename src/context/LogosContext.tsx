"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { ILogo, IPlanLogo } from "@/types/logos.types";

interface LogosContextType {
  LogosData: IPlanLogo[];
  SavedData: ILogo[];

  isLoading: boolean;

  addToPlan: (logo: ILogo) => boolean;
  removeFromPlan: (id: number) => void;
  markAsDone: (id: number) => void;

  saveForLater: (logo: ILogo) => void;
  removeFromSaved: (id: number) => void;
}

export const LogosContext = createContext<LogosContextType | undefined>(
  undefined,
);

const LogosProvider = ({ children }: { children: ReactNode }) => {
  const [LogosData, setLogosData] = useState<IPlanLogo[]>([]);
  const [SavedData, setSavedData] = useState<ILogo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedLater = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        setLogosData(JSON.parse(savedPlan));
      }

      if (savedLater) {
        setSavedData(JSON.parse(savedLater));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("fitlog-plan", JSON.stringify(LogosData));
    }
  }, [LogosData, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("fitlog-saved", JSON.stringify(SavedData));
    }
  }, [SavedData, isLoading]);

  const addToPlan = (logo: ILogo): boolean => {
    // Maximum 5 workouts
    if (LogosData.length >= 5) {
      toast.error("Today's plan is full. Maximum 5 workouts.");
      return false;
    }

    const alreadyAdded = LogosData.some((item) => item.id === logo.id);

    if (alreadyAdded) {
      toast.error("This workout is already in your plan.");
      return false;
    }

    const planLogo: IPlanLogo = {
      ...logo,
      completed: false,
    };

    setLogosData((prev) => [...prev, planLogo]);

    toast.success(`${logo.name} added to today's plan.`);

    return true;
  };

  const removeFromPlan = (id: number) => {
    const workout = LogosData.find((item) => item.id === id);

    setLogosData((prev) => prev.filter((item) => item.id !== id));

    if (workout) {
      toast.success(`${workout.name} removed from your plan.`);
    }
  };

  const markAsDone = (id: number) => {
    const workout = LogosData.find((item) => item.id === id);

    if (!workout) return;

    setLogosData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );

    if (workout.completed) {
      toast.success(`${workout.name} marked as incomplete.`);
    } else {
      toast.success(`${workout.name} completed! 💪`);
    }
  };

  const saveForLater = (logo: ILogo) => {
    const alreadySaved = SavedData.some((item) => item.id === logo.id);

    if (alreadySaved) {
      toast.error(`${logo.name} is already saved.`);
      return;
    }

    setSavedData((prev) => [...prev, logo]);

    toast.success(`${logo.name} saved for later.`);
  };

  const removeFromSaved = (id: number) => {
    const workout = SavedData.find((item) => item.id === id);

    setSavedData((prev) => prev.filter((item) => item.id !== id));

    if (workout) {
      toast.success(`${workout.name} removed from saved.`);
    }
  };

  const sharedData: LogosContextType = {
    LogosData,
    SavedData,
    isLoading,
    addToPlan,
    removeFromPlan,
    markAsDone,
    saveForLater,
    removeFromSaved,
  };

  return (
    <LogosContext.Provider value={sharedData}>{children}</LogosContext.Provider>
  );
};

export default LogosProvider;
