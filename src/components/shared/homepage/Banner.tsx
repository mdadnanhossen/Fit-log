
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#0d0f11] py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 rounded-xl bg-[#15171c] px-6 py-10 md:grid-cols-2 md:px-10 md:py-12">
          
          {/* Content */}
          <div>
            <p className="mb-4 text-[10px] font-bold tracking-wide text-[#b8ff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[0.95] text-white md:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-5 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#b8ff00] px-4 py-3 text-[10px] font-bold text-black transition hover:bg-[#a8ed00]"
            >
              BROWSE WORKOUTS
              <span aria-hidden="true">↓</span>
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={bannerImage}
              alt="Workout Banner"
              width={420}
              height={300}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;