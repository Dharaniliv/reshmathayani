"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const whatsappMessage =
  "Hello Reshma, I came across your website and would like to enquire about bridal makeup availability and bookings.";

const whatsappUrl = `https://wa.me/916309591634?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function BookingInvitation() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="booking"
      className="overflow-hidden bg-[#FFF7F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-[7%] lg:py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* SECTION HEADING — NO INTRODUCTORY PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B84F70]"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Bridal Bookings
          </span>

          <h2
            className="mx-auto mt-5 max-w-[850px] text-[clamp(38px,5vw,64px)] font-normal leading-[1.1] tracking-[-1.5px] text-[#3F3438]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Your day deserves a look
            <br className="hidden sm:block" /> as{" "}
            <span className="italic text-[#B84F70]">
              special as you.
            </span>
          </h2>
        </motion.div>

        {/* CONNECTED IMAGE AND CTA */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-t-[100px] rounded-b-[3px] sm:rounded-t-[170px] lg:rounded-t-[220px]"
        >
          {/* LANDSCAPE IMAGE */}
          <div className="relative aspect-[4/3] bg-[#FCE8E1] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/images/resh-booking.jpg"
              alt="Bridal beauty by Reshma Thayani"
              fill
              sizes="(max-width: 639px) 92vw, (max-width: 1023px) 88vw, 1100px"
              quality={90}
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#28191D]/45 via-[#28191D]/5 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8 lg:p-10">
              <p
                className="max-w-[260px] text-[12px] italic leading-relaxed text-white sm:text-[15px]"
                style={{ fontFamily: "var(--font-instrument), serif" }}
              >
                Beauty that feels like you.
                <br />
                Memories that stay forever.
              </p>

              <span
                className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 sm:block"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                Resh Thayani · Bridal Makeup
              </span>
            </div>
          </div>

          {/* FULL-WIDTH FINAL CTA */}
          <div className="flex flex-col items-center bg-[#FCE8E1] px-5 py-10 text-center sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <h3
  className="max-w-[760px] text-[25px] font-normal leading-[1.2] tracking-[-0.8px] text-[#3F3438] min-[390px]:text-[27px] sm:text-[clamp(29px,3.8vw,46px)]"
  style={{ fontFamily: "var(--font-fraunces), serif" }}
>
  Let&apos;s create something
  <br />
  <span className="italic text-[#B84F70]">
    beautiful together.
  </span>
</h3>

            {/* MORE SPACE BETWEEN HEADING AND PARAGRAPH */}
        <p
  className="mx-auto max-w-[440px] text-[12px] leading-[1.95] text-[#716269] sm:text-[13px]"
  style={{
    fontFamily: "var(--font-jakarta), sans-serif",
    marginTop: "10px",
  }}
>
  Tell me about your special day, and let&apos;s find
  the perfect look to make you feel your most beautiful.
</p>

            {/* WHATSAPP CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire about bridal makeup availability on WhatsApp"
              className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[5px] border border-[#B84F70] bg-[#B84F70] px-7 py-3 !text-[#FFF7F2] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A74363] hover:bg-[#A74363] hover:!text-[#FFF7F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B84F70] sm:px-8"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#FFF7F2",
              }}
            >
              <span className="!text-[#FFF7F2] text-[10px] font-semibold tracking-[0.14em]">
                ENQUIRE ABOUT YOUR DATE
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                color="#FFF7F2"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}