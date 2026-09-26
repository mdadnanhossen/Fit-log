import LogoCard from '@/components/shared/LogoCard';
import { ILogo } from '@/types/logos.types';

const getLogos = async (): Promise<ILogo[]> => {
  const res = await fetch(
    'https://api.abcz.workers.dev/api/fitlog'
  );

  if (!res.ok) {
    throw new Error(
      'Failed to fetch workout data'
    );
  }

  return res.json();
};

const Logos = async () => {
  const logosData = await getLogos();

  return (
    <section className="container mx-auto max-w-[1200px] px-5 py-10 md:px-6 md:py-12">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
          The Library
        </h2>

        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

        {logosData.map((logo) => (
          <LogoCard
            key={logo.id}
            logo={logo}
          />
        ))}

      </div>

    </section>
  );
};

export default Logos;