"use client";

import Image from "next/image";
import Link from "next/link";

import { IPlanLogo } from "@/types/logos.types";

interface PlanCardProps {
  workout: IPlanLogo;
  onRemove: (id: number) => void;
  onMarkDone: (id: number) => void;
}

const PlanCard = ({ workout, onRemove, onMarkDone }: PlanCardProps) => {
  return (
    <article
      className={`group rounded-xl border border-[#292c32] bg-[#111315] p-3 transition-all duration-200 ${
        workout.completed ? "opacity-70" : "hover:border-[#b8ff00]/40"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
          <Image
            src={workout.image}
            alt={workout.name}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          {/* Title */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2
                className={`truncate text-sm font-extrabold uppercase sm:text-[15px] ${
                  workout.completed
                    ? "text-gray-500 line-through"
                    : "text-white"
                }`}
              >
                {workout.name}
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
                {workout.equipment}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(workout.id)}
              className="btn btn-circle btn-ghost btn-xs shrink-0 text-gray-500 hover:bg-red-500/10 hover:text-red-400 sm:hidden"
              aria-label={`Remove ${workout.name}`}
            >
              ✕
            </button>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">
            <span>◷ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>★ {workout.rating}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-2 sm:justify-end">
          <Link
            href={`/logos/${workout.id}`}
            className="btn btn-ghost btn-xs px-2 text-[10px] text-gray-400 hover:bg-transparent hover:text-white"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={() => onMarkDone(workout.id)}
            className={`btn btn-xs border-none px-3 text-[10px] ${
              workout.completed
                ? "bg-[#292c32] text-gray-300 hover:bg-[#34383d]"
                : "bg-[#b8ff00] text-black hover:bg-[#a8ed00]"
            }`}
          >
            {workout.completed ? "✓ Completed" : "✓ Mark as Done"}
          </button>

          <button
            type="button"
            onClick={() => onRemove(workout.id)}
            className="hidden text-xs text-gray-600 transition hover:text-red-400 sm:block"
            aria-label={`Remove ${workout.name}`}
          >
            ✕
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlanCard;
