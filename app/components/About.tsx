"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AboutProps {
  full?: boolean;
}

export default function About({ full = false }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Show content immediately when reduced motion is preferred.
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section relative mx-auto max-w-[1280px] overflow-hidden bg-[#FFF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-[7%] lg:py-[105px] ${
        full ? "page-section" : ""
      } ${isVisible ? "about-visible" : "about-hidden"}`}
    >
      <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[42%_48%] lg:gap-[10%]">
        {/* MOBILE SECTION LABEL */}
        <span
          className="about-content mb-0 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B84F70] lg:hidden"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          A Little About Me
        </span>

        {/* LEFT: PORTRAIT, ROSE AND SIGNATURE */}
        <div className="flex flex-col items-start pl-2">
          {/* CLIENT PORTRAIT */}
          <div className="about-image relative ml-4 w-[88%] max-w-[360px] rotate-[-3deg] sm:ml-7">
            <div className="relative aspect-[0.88/1] w-full overflow-hidden rounded-t-[50%] rounded-b-[8px] bg-[#FCE8E1]">
              <Image
                src="/images/resh-about.jpg"
                alt="Resh Thayani, bridal makeup artist"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 360px"
                className="object-cover object-[50%_12%]"
              />
            </div>

            {/* TABLET ROSE: ANCHORED TO PORTRAIT BOTTOM-RIGHT */}
            <div className="about-decoration pointer-events-none absolute -bottom-12 -right-3 z-10 hidden w-[120px] rotate-[10deg] opacity-100 min-[640px]:max-[1023px]:block">
              <img
                src="/images/botanical.png"
                alt=""
                loading="eager"
                draggable="false"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* SIGNATURE AND ROSE ROW */}
          <div className="relative flex w-full items-start justify-between">
            {/* SIGNATURE: TWO LINES ON MOBILE */}
            <span
              className="about-decoration relative z-10 mt-3 ml-2 w-[58%] -rotate-[4deg] text-[21px] leading-[1.15] text-[#B84F70] sm:text-[22px] lg:mt-5 lg:ml-0 lg:w-auto lg:whitespace-nowrap lg:text-[24px]"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              <span className="block lg:inline">a little heart in</span>
              <span className="block lg:inline lg:ml-1">
                every brushstroke
              </span>
            </span>

            {/* ROSE: ORIGINAL MOBILE AND LAPTOP POSITIONS */}
            <div className="about-decoration pointer-events-none relative -mt-12 mr-0 w-[115px] rotate-[10deg] opacity-100 sm:-mt-16 sm:w-[135px] min-[640px]:max-[1023px]:hidden lg:absolute lg:bottom-[-20px] lg:left-[290px] lg:right-auto lg:mr-0 lg:mt-0 lg:w-[155px] lg:rotate-[10deg]">
              <img
                src="/images/botanical.png"
                alt=""
                loading="eager"
                draggable="false"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: ABOUT STORY */}
        <div className="about-content pt-0 lg:pt-6">
          {/* DESKTOP SECTION LABEL */}
          <span
            className="mb-5 hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B84F70] lg:block"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            A Little About Me
          </span>

          {/* HEADING */}
          <h2
            className="mb-6 text-[clamp(38px,4vw,48px)] font-normal leading-[1.15] tracking-[-1px] text-[#3F3438]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Elevating your
            <br />
            <em className="font-normal italic text-[#B84F70]">
              natural beauty.
            </em>
          </h2>

          {/* INTRODUCTORY QUOTE */}
          <p
            className="mb-5 mt-6 max-w-[440px] text-[19px] leading-[1.6] text-[#3F3438] sm:text-[21px]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            “Every beautiful look begins with embracing the beauty that
            is already yours.”
          </p>

          {/* ABOUT DESCRIPTION */}
          <p
            className="mb-6 text-[14px] leading-[1.9] text-[#716269] sm:text-[15px] lg:text-base"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            I’m Reshma Thayani, a bridal makeup artist based in Hyderabad.
            My approach is to celebrate your natural features, complement
            your personal style, and create a look that feels unmistakably
            you on your most meaningful occasions.
          </p>

          {/* EXTRA DESCRIPTION ON FULL ABOUT PAGE */}
          {full && (
            <p
              className="mb-6 text-[14px] leading-[1.9] text-[#716269] sm:text-[15px]"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Every look is thoughtfully created to help you feel confident,
              radiant, and beautifully yourself.
            </p>
          )}

          {/* CTA LINK */}
          <Link
            href={full ? "/contact" : "/about"}
            className="about-cta mt-2 inline-flex items-center gap-[13px] border-b border-[#B84F70] pb-1 text-[12px] font-medium !text-[#B84F70] transition-all duration-300 hover:gap-[19px] hover:!text-[#A74363]"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "#B84F70",
            }}
          >
            {full ? "Let’s get to know each other" : "A little more about me"}
            <ArrowUpRight className="h-4 w-4" color="currentColor" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-hidden .about-image,
        .about-hidden .about-content,
        .about-hidden .about-decoration,
        .about-hidden .about-cta {
          opacity: 0;
          transform: translateY(22px);
        }

        .about-visible .about-image,
        .about-visible .about-content,
        .about-visible .about-decoration,
        .about-visible .about-cta {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 750ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-visible .about-content {
          transition-delay: 180ms;
        }

        .about-visible .about-decoration {
          transition-delay: 350ms;
        }

        .about-visible .about-cta {
          transition-delay: 280ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-hidden .about-image,
          .about-hidden .about-content,
          .about-hidden .about-decoration,
          .about-hidden .about-cta,
          .about-visible .about-image,
          .about-visible .about-content,
          .about-visible .about-decoration,
          .about-visible .about-cta {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}