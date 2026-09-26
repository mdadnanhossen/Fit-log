'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logo.png';
import { LogosContext } from '@/context/LogosContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const context = useContext(LogosContext);

  const planCount = context?.LogosData.length ?? 0;
  const savedCount = context?.SavedData.length ?? 0;

  const isHome = pathname === '/';
  const isMyPlan = pathname === '/my-plan';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#25282d] bg-[#0d0f11] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">

        {/* Main Navbar */}
        <div className="flex h-[68px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              priority
            />

            <span className="text-[17px] font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">

            {/* Workouts */}
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-[11px] font-semibold transition ${
                isHome
                  ? 'bg-[#18270b] text-[#b8ff00]'
                  : 'text-gray-400 hover:bg-[#15171c] hover:text-white'
              }`}
            >
              Workouts
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-[11px] font-semibold transition ${
                isMyPlan
                  ? 'bg-[#18270b] text-[#b8ff00]'
                  : 'text-gray-400 hover:bg-[#15171c] hover:text-white'
              }`}
            >
              My Plan
            </Link>

          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-6 text-[11px] md:flex">

            {/* Plan Count */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b8ff00] text-[9px] font-bold text-black">
                {planCount}
              </span>
            </Link>

            {/* Saved Count */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#30343a] text-[9px]">
                {savedCount}
              </span>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-[#25282d] py-4 md:hidden">

            <div className="flex flex-col gap-2">

              {/* Workouts */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isHome
                    ? 'bg-[#18270b] text-[#b8ff00]'
                    : 'text-gray-400 hover:bg-[#15171c] hover:text-white'
                }`}
              >
                Workouts
              </Link>

              {/* My Plan */}
              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isMyPlan
                    ? 'bg-[#18270b] text-[#b8ff00]'
                    : 'text-gray-400 hover:bg-[#15171c] hover:text-white'
                }`}
              >
                My Plan
              </Link>

              {/* Mobile Counts */}
              <div className="mt-2 flex items-center gap-6 border-t border-[#25282d] pt-4 text-xs">

                {/* Plan */}
                <Link
                  href="/my-plan"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <span>Plan</span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b8ff00] text-[9px] font-bold text-black">
                    {planCount}
                  </span>
                </Link>

                {/* Saved */}
                <Link
                  href="/my-plan"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <span>Saved</span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#30343a] text-[9px]">
                    {savedCount}
                  </span>
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;