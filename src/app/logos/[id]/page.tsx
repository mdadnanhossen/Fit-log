import Image from "next/image";
import { ILogo } from "@/types/logos.types";
import AddButton from "@/components/logosDetails/AddButton";
import SaveButton from "@/components/logosDetails/SaveButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLogo = async (id: string): Promise<ILogo> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  return res.json();
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const logo = await getLogo(id);

  const stats = [
    { label: "Equipment", value: logo.equipment },
    { label: "Difficulty", value: logo.difficulty },
    { label: "Sets", value: logo.sets },
    { label: "Reps", value: logo.reps },
    { label: "Duration", value: `${logo.duration} min` },
    { label: "Calories", value: `${logo.caloriesBurned} kcal` },
    { label: "Rating", value: logo.rating },
  ];

  return (
    <section className="container mx-auto px-4 py-6 md:px-6 md:py-10">
      {/* DaisyUI Responsive Card */}
      <div className="card lg:card-side overflow-hidden border border-[#292c32] bg-black shadow-xl">
        {/* Image */}
        <figure className="w-full lg:w-1/2">
          <Image
            src={logo.image}
            alt={logo.name}
            width={800}
            height={800}
            className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[650px]"
          />
        </figure>

        {/* Content */}
        <div className="card-body w-full lg:w-1/2">
          {/* Name */}
          <h1 className="card-title text-2xl font-extrabold uppercase text-white sm:text-3xl md:text-4xl">
            {logo.name}
          </h1>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-gray-400">
            {logo.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-3 flex flex-wrap gap-2">
            {logo.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="badge border-none bg-[#b8ff00] px-3 py-3 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#292c32]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between border-b border-[#292c32] px-4 py-3 last:border-b-0"
              >
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {stat.label}
                </span>

                <span className="text-sm font-bold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-5">
            <h2 className="mb-3 text-lg font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="space-y-2">
              {logo.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm leading-6 text-gray-300"
                >
                  <span className="font-bold text-gray-500">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          {/* <div className="card-actions mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
           <AddButton logo={logo}/>

            <button className="btn btn-outline w-full text-white sm:w-auto">
              <SaveButton logo={logo} />
            </button>
          </div> */}
          <div className="card-actions mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <AddButton logo={logo} />

            <SaveButton logo={logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
