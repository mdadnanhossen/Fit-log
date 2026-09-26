"use client";

import { useContext, useMemo, useState } from "react";
import Link from "next/link";

import { LogosContext } from "@/context/LogosContext";

import PlanStats from "@/components/myPlan/PlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import PlanCard from "@/components/myPlan/PlanCard";
import SavedCard from "../../components/myPlan/SaveCard";

type SortOption = "duration" | "calories" | "rating" | "name";

const MyPlanPage = () => {
  const context = useContext(LogosContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  if (!context) {
    return null;
  }

  const {
    LogosData,
    SavedData,
    isLoading,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  } = context;

  const sortedPlan = useMemo(() => {
    const data = [...LogosData];

    switch (sortBy) {
      case "duration":
        return data.sort((a, b) => a.duration - b.duration);

      case "calories":
        return data.sort((a, b) => b.caloriesBurned - a.caloriesBurned);

      case "rating":
        return data.sort((a, b) => b.rating - a.rating);

      case "name":
        return data.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return data;
    }
  }, [LogosData, sortBy]);

  const sortedSaved = useMemo(() => {
    const data = [...SavedData];

    switch (sortBy) {
      case "duration":
        return data.sort((a, b) => a.duration - b.duration);

      case "calories":
        return data.sort((a, b) => b.caloriesBurned - a.caloriesBurned);

      case "rating":
        return data.sort((a, b) => b.rating - a.rating);

      case "name":
        return data.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return data;
    }
  }, [SavedData, sortBy]);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-[#b8ff00]" />

          <p className="mt-3 text-sm text-gray-500">Loading workouts...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto max-w-[1200px] px-4 py-8 md:px-6 md:py-10">
      <div>
        <h1 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
          My Plan
        </h1>

        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-6">
        <PlanStats workouts={activeTab === "today" ? LogosData : SavedData} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <PlanTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            planCount={LogosData.length}
            savedCount={SavedData.length}
          />
        </div>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <span className="text-[10px] uppercase tracking-wide text-gray-500">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="select select-sm h-9 min-h-9 border-[#292c32] bg-[#111315] text-[10px] text-gray-300 outline-none"
          >
            <option value="duration">Duration</option>

            <option value="calories">Calories</option>

            <option value="rating">Rating</option>

            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {activeTab === "today" && (
        <div className="mt-5">
          {sortedPlan.length === 0 ? (
            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#292c32] bg-[#111315] px-6 py-12 text-center">
              <h2 className="text-lg font-extrabold uppercase text-white sm:text-xl">
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
                Browse the library and add a lift to get moving.
              </p>

              <Link
                href="/"
                className="btn mt-5 h-9 min-h-9 border-none bg-[#b8ff00] px-5 text-xs font-bold text-black hover:bg-[#a8ed00]"
              >
                Go to Workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedPlan.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  onRemove={removeFromPlan}
                  onMarkDone={markAsDone}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="mt-5">
          {sortedSaved.length === 0 ? (
            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#292c32] bg-[#111315] px-6 py-12 text-center">
              <h2 className="text-lg font-extrabold uppercase text-white sm:text-xl">
                No Saved Workouts
              </h2>

              <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
                Save workouts for later and they will appear here.
              </p>

              <Link
                href="/"
                className="btn mt-5 h-9 min-h-9 border-none bg-[#b8ff00] px-5 text-xs font-bold text-black hover:bg-[#a8ed00]"
              >
                Browse Workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedSaved.map((workout) => (
                <SavedCard
                  key={workout.id}
                  workout={workout}
                  onRemove={removeFromSaved}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "today" && LogosData.length >= 5 && (
        <p className="mt-4 text-center text-[10px] text-gray-600">
          Your plan is full. Complete or remove a workout before adding another.
        </p>
      )}
    </section>
  );
};

export default MyPlanPage;
