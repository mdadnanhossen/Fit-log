import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-[#b8ff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl font-extrabold text-white sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-xl font-bold uppercase text-white">
          Workout Not Found
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 border-none bg-[#b8ff00] text-black hover:bg-[#a8ed00]"
        >
          Back to Workouts
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
