import { ILogo } from "@/types/logos.types";

interface PlanStatsProps {
  workouts: ILogo[];
}

const PlanStats = ({ workouts }: PlanStatsProps) => {
  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-[#292c32] bg-[#0d0f11] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
          Exercises
        </p>

        <p className="mt-2 text-3xl font-extrabold text-white">
          {totalExercises}
        </p>
      </div>

      <div className="rounded-xl border border-[#292c32] bg-[#0d0f11] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
          Minutes
        </p>

        <p className="mt-2 text-3xl font-extrabold text-white">
          {totalMinutes}
        </p>
      </div>

      <div className="rounded-xl border border-[#292c32] bg-[#0d0f11] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
          Calories
        </p>

        <p className="mt-2 text-3xl font-extrabold text-white">
          {totalCalories}
        </p>
      </div>
    </div>
  );
};

export default PlanStats;
