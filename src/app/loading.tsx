const Loading = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-[#b8ff00]" />

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Loading workouts...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loading;
