import LogoCard from "@/components/shared/LogoCard";
import { ILogo } from "@/types/logos.types";

const getLogos = async (): Promise<ILogo[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return res.json();
};

const Logos = async () => {
  const logosData = await getLogos();

  return (
    <section className="container mx-auto px-6 py-8 md:py-10">
     
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

   
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {logosData.map((logo) => (
          <LogoCard key={logo.id} logo={logo} />
        ))}
      </div>
    </section>
  );
};

export default Logos;