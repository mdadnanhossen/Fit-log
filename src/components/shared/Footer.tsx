import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#202328] bg-[#0d0f11]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <div className="flex min-h-[88px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />

            <span className="text-xs font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          <p className="text-right text-[10px] text-gray-500">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
