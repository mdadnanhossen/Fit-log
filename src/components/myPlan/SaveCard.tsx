'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ILogo } from '@/types/logos.types';

interface SavedCardProps {
  workout: ILogo;
  onRemove: (id: number) => void;
}

const SavedCard = ({
  workout,
  onRemove,
}: SavedCardProps) => {
  return (
    <article className="group rounded-xl border border-[#292c32] bg-[#111315] p-3 transition-all duration-200 hover:border-[#b8ff00]/40">
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

        {/* Image */}
        <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
          <Image
            src={workout.image}
            alt={workout.name}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <h2 className="truncate text-sm font-extrabold uppercase text-white sm:text-[15px]">
            {workout.name}
          </h2>

          <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">

            <span>
              ◷ {workout.duration} min
            </span>

            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span>
              ★ {workout.rating}
            </span>

          </div>

        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center justify-between gap-2 sm:justify-end">

          <Link
            href={`/logos/${workout.id}`}
            className="btn btn-ghost btn-xs px-2 text-[10px] text-gray-400 hover:bg-transparent hover:text-white"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={() => onRemove(workout.id)}
            className="btn btn-circle btn-ghost btn-xs text-gray-500 hover:bg-red-500/10 hover:text-red-400"
            aria-label={`Remove ${workout.name} from saved`}
          >
            ✕
          </button>

        </div>
      </div>
    </article>
  );
};

export default SavedCard;