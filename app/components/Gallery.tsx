"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/resh-portfolio-1.jpg",
    alt: "Bridal makeup by Resh Thayani",
  },
  {
    src: "/images/resh-portfolio-2.jpg",
    alt: "Elegant bridal portrait by Resh Thayani",
  },
  {
    src: "/images/resh-portfolio-3.jpg",
    alt: "Close-up of bridal makeup by Resh Thayani",
  },
  {
    src: "/images/resh-portfolio-4.jpg",
    alt: "Soft romantic makeup by Resh Thayani",
  },
  {
    src: "/images/resh-portfolio-5.jpg",
    alt: "Timeless bridal makeup by Resh Thayani",
  },
];

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#FFF7F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-[7%] lg:py-32"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[22%] -z-10 h-72 w-72 rounded-full bg-[#FCE8E1]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-[12%] -z-10 h-80 w-80 rounded-full bg-[#F8C9B9]/25 blur-3xl"
      />

      <div className="mx-auto max-w-[1240px]">
        {/* EDITORIAL INTRODUCTION */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-[680px] text-center sm:mb-20"
        >
          <span
            className="mb-5 inline-block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B84F70]"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            A Glimpse of My Work
          </span>

          <h2
            className="text-[clamp(42px,5.4vw,70px)] font-normal leading-[1.05] tracking-[-1.8px] text-[#3F3438]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Every look tells
            <br />
            <em className="font-normal text-[#B84F70]">a story.</em>
          </h2>

          <p
            className="mx-auto mt-6 max-w-[470px] text-[13px] leading-[1.95] text-[#716269] sm:text-[14px]"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            From timeless bridal beauty to soft, radiant glam, each look is
            thoughtfully created to make you feel beautifully yourself.
          </p>

          <p
            className="mt-5 -rotate-2 text-[26px] text-[#B84F70] sm:text-[30px]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            beauty in every little detail
          </p>
        </motion.div>

        {/* EDITORIAL PHOTO COLLAGE */}
        <div className="relative mx-auto max-w-[1100px]">
          {/* Main bridal portrait */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="relative z-10 mx-auto w-[94%] sm:w-[82%] lg:mx-0 lg:ml-[5%] lg:w-[44%]"
          >
            <div className="relative aspect-[0.78/1] overflow-hidden rounded-t-[48%] rounded-b-[3px] bg-[#FCE8E1] p-[5px]">
              <div className="relative h-full w-full overflow-hidden rounded-t-[48%] rounded-b-[2px]">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 1023px) 80vw, 42vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 ease-out hover:scale-[1.025]"
                />
              </div>
            </div>
          </motion.div>

          {/* Second portrait: moved outward so the face and outfit remain visible */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: reduceMotion ? 0 : 0.12 }}
            className="relative z-20 mx-auto -mt-5 w-[68%] sm:ml-auto sm:mr-[3%] sm:w-[40%] lg:absolute lg:right-[6%] lg:top-[2%] lg:mt-0 lg:mr-0 lg:w-[28%]"
          >
            <div className="rotate-[3deg] bg-[#FFFDF9] p-2 pb-4 shadow-[0_12px_35px_rgba(63,52,56,0.12)] sm:p-3 sm:pb-6">
              <div className="relative aspect-[0.76/1] overflow-hidden bg-[#FCE8E1]">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(max-width: 639px) 65vw, 30vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </motion.div>

          {/* Third photograph: separate from the second and fifth images */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: reduceMotion ? 0 : 0.16 }}
            className="relative z-30 mx-auto -mt-5 w-[59%] sm:ml-[7%] sm:mr-0 sm:w-[31%] lg:absolute lg:right-[0%] lg:top-[42%] lg:mt-0 lg:w-[24%]"
          >
            <div className="-rotate-[3deg] border-[5px] border-[#FFFDF9] bg-[#FFFDF9] shadow-[0_10px_28px_rgba(63,52,56,0.13)] sm:border-[7px]">
              <div className="relative aspect-[0.88/1] overflow-hidden bg-[#FCE8E1]">
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  sizes="(max-width: 639px) 58vw, 25vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </motion.div>

          {/* Fourth portrait: lower-left supporting image */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: reduceMotion ? 0 : 0.1 }}
            className="relative z-20 mx-auto -mt-5 w-[66%] sm:ml-auto sm:mr-[9%] sm:w-[37%] lg:absolute lg:bottom-[5%] lg:right-[27%] lg:mt-0 lg:w-[25%]"
          >
            <div className="rotate-[2deg] bg-[#FFFDF9] p-2 pb-4 shadow-[0_12px_32px_rgba(63,52,56,0.12)] sm:p-3 sm:pb-6">
              <div className="relative aspect-[0.86/1] overflow-hidden bg-[#FCE8E1]">
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  sizes="(max-width: 639px) 65vw, 27vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </motion.div>

          {/* Fifth portrait: moved to the lower-right, without covering image three */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: reduceMotion ? 0 : 0.2 }}
            className="relative z-40 mx-auto -mt-5 mb-3 w-[52%] sm:ml-[9%] sm:mr-0 sm:w-[29%] lg:absolute lg:bottom-[-8%] lg:right-[20%] lg:mt-0 lg:mb-0 lg:w-[21%]"
          >
            <div className="-rotate-[2deg] border-[5px] border-[#FFFDF9] bg-[#FFFDF9] shadow-[0_10px_28px_rgba(63,52,56,0.12)] sm:border-[7px]">
              <div className="relative aspect-[0.88/1] overflow-hidden bg-[#FCE8E1]">
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  sizes="(max-width: 639px) 50vw, 22vw"
                  className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </motion.div>

          {/* Botanical decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-10 mx-auto mt-5 w-[95px] opacity-80 sm:mt-8 sm:w-[120px] lg:absolute lg:bottom-[0%] lg:left-[-3%] lg:mt-0 lg:w-[145px]"
          >
            <Image
              src="/images/botanical.png"
              alt=""
              width={240}
              height={300}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* PORTFOLIO CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 flex flex-col items-center text-center sm:mt-20 lg:mt-24"
        >
          <p
            className="mb-5 max-w-[390px] text-[12px] leading-[1.9] text-[#716269] sm:text-[13px]"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Discover more looks, details, and moments from my makeup journey.
          </p>

          <Link
            href="/portfolio"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[5px] border border-[#B84F70] bg-[#B84F70] px-8 !text-[#FFF7F2] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A74363] hover:bg-[#A74363] hover:!text-[#FFF7F2]"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "#FFF7F2",
            }}
          >
            <span className="text-[10px] font-semibold tracking-[0.18em] !text-[#FFF7F2]">
              VIEW FULL PORTFOLIO
            </span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="text-[#FFF7F2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}