
'use client';

import { ILogo, IPlanLogo } from '@/types/logos.types';

interface PlanStatsProps {
  workouts: (ILogo | IPlanLogo)[];
}

const PlanStats = ({
  workouts,
}: PlanStatsProps) => {
  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) =>
      total + Number(workout.duration),
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned),
    0
  );

  return (
    <div className="grid w-full grid-cols-3 overflow-hidden rounded-xl border border-[#292c32] bg-[#111315]">

      {/* Exercises */}
      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-500">
          Exercises
        </p>

        <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
          {totalExercises}
        </p>
      </div>

      {/* Minutes */}
      <div className="border-l border-[#292c32] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-500">
          Minutes
        </p>

        <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
          {totalMinutes}
        </p>
      </div>

      {/* Calories */}
      <div className="border-l border-[#292c32] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-500">
          Calories
        </p>

        <p className="mt-1 text-2xl font-extrabold text-[#b8ff00] sm:text-3xl">
          {totalCalories}
        </p>
      </div>

    </div>
  );
};

export default PlanStats;