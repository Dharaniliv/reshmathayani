"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const whatsappMessage =
  "Hello Reshma, I came across your website and would like to know more about your makeup services and availability.";

const whatsappUrl = `https://wa.me/916309591634?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#FFF7F2]">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-[1440px] items-center gap-10 px-6 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-16 lg:py-6 xl:gap-16 xl:px-24">
        {/* LEFT: BRAND MESSAGE */}
        <div className="hero-text order-1 w-full max-w-[680px] lg:order-1">
       <h1
  className="mb-2 text-center text-[38px] leading-[1.12] tracking-[-1.8px] text-[#3F3438] min-[376px]:text-[clamp(46px,5.4vw,84px)] sm:mb-3 sm:text-[clamp(52px,5.4vw,84px)] lg:mb-3 lg:text-left"
  style={{ fontFamily: "var(--font-fraunces), serif" }}
>
  <span className="whitespace-nowrap">Elevating Your</span>
  <br />
  <span className="italic text-[#B84F70]">
    Natural Beauty.
  </span>
</h1>

          <p
            className="mx-auto mt-0 max-w-[490px] text-center text-[14px] leading-[1.9] text-[#716269] sm:text-[15px] lg:mx-0 lg:text-left xl:text-base"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Thoughtfully crafted makeup that celebrates your natural beauty
            and makes your most meaningful moments unforgettable.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start">
            {/* FILLED CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[6px] border border-[#B84F70] bg-[#B84F70] px-6 text-[11px] font-semibold tracking-wide !text-[#FFF7F2] transition-colors duration-300 hover:border-[#A74363] hover:bg-[#A74363]"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#FFF7F2",
              }}
            >
              Enquire Now
              <ArrowUpRight size={15} color="#FFF7F2" />
            </a>

            {/* OUTLINE CTA */}
            <Link
              href="/portfolio"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] border border-[#B84F70]/50 bg-transparent px-6 text-[11px] font-semibold tracking-wide text-[#B84F70] transition-colors duration-300 hover:bg-[#FCE8E1]"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Explore My Work
            </Link>
          </div>
        </div>

        {/* RIGHT: OVAL PORTRAIT */}
        <div className="hero-image order-2 flex w-full items-center justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-[0.82/1] w-full max-w-[450px] overflow-hidden rounded-t-[50%] rounded-b-[8px] sm:max-w-[480px] lg:max-w-[450px] xl:max-w-[470px]">
            <Image
              src="/images/resh-hero.jpg"
              alt="Reshma Thayani, professional makeup artist"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="object-cover object-[center_25%]"
            />
          </div>
        </div>
      </div>

      {/* ENTRANCE ANIMATIONS */}
      <style jsx>{`
        .hero-text {
          animation: heroTextIn 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-image {
          animation: heroImageIn 1000ms
            cubic-bezier(0.22, 1, 0.36, 1) 150ms both;
        }

        @keyframes heroTextIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImageIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-text,
          .hero-image {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}