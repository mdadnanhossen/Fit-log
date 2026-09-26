import Image from 'next/image';
import Link from 'next/link';

import { ILogo } from '@/types/logos.types';

const LogoCard = ({
  logo,
}: {
  logo: ILogo;
}) => {
  return (
    <Link
      href={`/logos/${logo.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl border border-[#292c32] bg-[#111315] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8ff00]">

        {/* Image */}
        <div className="relative aspect-[1.65/1] overflow-hidden bg-black">

          <Image
            src={logo.image}
            alt={logo.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-1.5">

            {logo.muscleGroups.map(
              (muscle, index) => (
                <span
                  key={`${muscle}-${index}`}
                  className="rounded-full bg-[#b8ff00] px-2.5 py-1 text-[9px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              )
            )}

          </div>

          {/* Name */}
          <h2 className="text-base font-extrabold uppercase text-white sm:text-lg">
            {logo.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-xs text-gray-500">
            {logo.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-[#292c32]" />

          {/* Stats */}
          <div className="flex items-center gap-3 text-[10px] text-gray-500 sm:text-xs">

            <span>
              ◷ {logo.duration} min
            </span>

            <span>
              🔥 {logo.caloriesBurned} kcal
            </span>

            <span>
              ★ {logo.rating}
            </span>

          </div>

        </div>
      </article>
    </Link>
  );
};

export default LogoCard;