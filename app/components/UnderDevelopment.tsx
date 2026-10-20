import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <main className="flex min-h-[calc(100svh-80px)] items-center justify-center bg-[#FFF7F2] px-6 py-16">
      <div className="w-full max-w-[480px] text-center">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B84F70]"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          Coming Soon
        </span>

        <h1
          className="mt-5 text-[clamp(36px,6vw,52px)] font-normal leading-tight tracking-[-1px] text-[#3F3438]"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          under development
        </h1>

        <p
          className="mx-auto mt-5 max-w-[360px] text-[13px] leading-[1.9] text-[#716269]"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          This page is currently under development.
          Please check back soon 
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[5px] bg-[#B84F70] px-6 text-[11px] font-semibold tracking-wide !text-[#FFF7F2] transition-colors hover:bg-[#A74363]"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          <ArrowLeft size={15} color="#FFF7F2" />
          <span>BACK TO HOME</span>
        </Link>
      </div>
    </main>
  );
}