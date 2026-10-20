"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const whatsappNumber = "916309591634";
const whatsappMessage =
  "Hello Reshma, I came across your website and would like to know more about your makeup services and availability.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
const instagramUrl = "https://www.instagram.com/resh.thayani/";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative mt-[50px] overflow-hidden bg-[#B84F70] text-[#FFF7F2]">
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full border border-[#FFF7F2]/15 sm:-right-12 sm:-top-40 sm:size-[440px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-[#FFF7F2]/15 sm:right-10 sm:-top-16 sm:size-72"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-6 pt-10 sm:px-8 sm:pt-14 md:px-10 lg:px-[7%] lg:pt-20">
        {/* Brand and booking area */}
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-7 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Brand section */}
          <div className="relative flex min-h-[300px] min-w-0 flex-col justify-center overflow-hidden py-7 sm:min-h-[350px] sm:py-8 lg:min-h-[380px]">
            {/* Elegant botanical rose illustration */}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 430"
              fill="none"
              className="pointer-events-none absolute -right-8 top-[38%] w-[180px] -translate-y-1/2 sm:right-0 sm:top-1/2 sm:w-[220px] lg:right-1 lg:w-[250px]"
            >
              <defs>
                <linearGradient
                  id="rose-petal"
                  x1="75"
                  y1="35"
                  x2="205"
                  y2="180"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F8C9B9" stopOpacity=".52" />
                  <stop offset=".55" stopColor="#FFF7F2" stopOpacity=".18" />
                  <stop offset="1" stopColor="#F8C9B9" stopOpacity=".06" />
                </linearGradient>
                <linearGradient
                  id="rose-inner"
                  x1="105"
                  y1="65"
                  x2="180"
                  y2="160"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F8C9B9" stopOpacity=".65" />
                  <stop offset="1" stopColor="#FFF7F2" stopOpacity=".1" />
                </linearGradient>
              </defs>

              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Outer petals */}
                <path
                  d="M145 157
                    C113 165 77 151 66 125
                    C53 96 71 66 98 65
                    C111 32 147 29 165 57
                    C188 34 220 51 219 80
                    C245 96 237 131 211 148
                    C194 162 170 165 145 157Z"
                  fill="url(#rose-petal)"
                  stroke="#FFF7F2"
                  strokeOpacity=".7"
                  strokeWidth="1.6"
                />

                {/* Left outer petal */}
                <path
                  d="M100 68
                    C73 44 48 60 52 88
                    C55 111 77 132 105 137
                    C91 115 89 91 100 68Z"
                  fill="#F8C9B9"
                  fillOpacity=".18"
                  stroke="#FFF7F2"
                  strokeOpacity=".7"
                  strokeWidth="1.5"
                />

                {/* Upper petal */}
                <path
                  d="M98 66
                    C89 35 117 14 142 36
                    C157 49 161 65 159 82
                    C146 66 124 61 98 66Z"
                  fill="url(#rose-petal)"
                  stroke="#FFF7F2"
                  strokeOpacity=".75"
                  strokeWidth="1.5"
                />

                {/* Right outer petal */}
                <path
                  d="M163 78
                    C177 47 207 44 221 65
                    C238 91 217 121 194 135
                    C201 111 187 91 163 78Z"
                  fill="#F8C9B9"
                  fillOpacity=".2"
                  stroke="#FFF7F2"
                  strokeOpacity=".75"
                  strokeWidth="1.5"
                />

                {/* Lower petals */}
                <path
                  d="M105 127
                    C81 133 84 158 111 171
                    C130 181 151 178 165 163
                    C145 163 125 150 105 127Z"
                  fill="#F8C9B9"
                  fillOpacity=".16"
                  stroke="#FFF7F2"
                  strokeOpacity=".65"
                  strokeWidth="1.5"
                />

                <path
                  d="M164 158
                    C185 172 211 155 213 135
                    C195 145 179 144 164 158Z"
                  fill="#F8C9B9"
                  fillOpacity=".14"
                  stroke="#FFF7F2"
                  strokeOpacity=".65"
                  strokeWidth="1.5"
                />

                {/* Inner petals */}
                <path
                  d="M111 91
                    C108 69 133 57 150 77
                    C165 59 189 72 187 93
                    C186 115 163 139 146 145
                    C128 134 113 114 111 91Z"
                  fill="url(#rose-inner)"
                  stroke="#FFF7F2"
                  strokeOpacity=".9"
                  strokeWidth="1.7"
                />

                <path
                  d="M125 91
                    C128 77 145 75 153 89
                    C166 76 180 87 176 101
                    C173 113 158 128 146 133
                    C134 125 123 108 125 91Z"
                  fill="#F8C9B9"
                  fillOpacity=".22"
                  stroke="#FFF7F2"
                  strokeOpacity=".85"
                  strokeWidth="1.5"
                />

                {/* Curled rose centre */}
                <path
                  d="M143 91
                    C129 85 130 105 143 112
                    C156 120 169 105 161 94
                    C155 86 144 91 146 100
                    C148 106 156 105 157 99"
                  stroke="#F8C9B9"
                  strokeWidth="2"
                  strokeOpacity=".95"
                />

                <path
                  d="M116 104 C123 123 135 137 146 142
                    M177 100 C173 117 159 133 146 142
                    M99 80 C104 97 115 108 125 114
                    M184 79 C180 91 173 99 164 104"
                  stroke="#FFF7F2"
                  strokeOpacity=".5"
                  strokeWidth="1.2"
                />

                {/* Sepals below bloom */}
                <path
                  d="M126 160 L108 183 L138 173 L150 193
                    L162 172 L190 180 L165 156"
                  stroke="#FFF7F2"
                  strokeOpacity=".8"
                  strokeWidth="1.6"
                />

                {/* Long curved stem */}
                <path
                  d="M148 187
                    C140 223 159 254 151 291
                    C146 319 159 350 172 383"
                  stroke="#F8C9B9"
                  strokeOpacity=".95"
                  strokeWidth="2.2"
                />
                <path
                  d="M157 185
                    C151 221 170 253 162 290
                    C157 319 170 349 183 379"
                  stroke="#FFF7F2"
                  strokeOpacity=".7"
                  strokeWidth="1.4"
                />

                {/* Large left leaf */}
                <path
                  d="M153 250
                    C127 244 98 222 96 195
                    C124 195 149 216 153 250Z"
                  fill="#F8C9B9"
                  fillOpacity=".2"
                  stroke="#FFF7F2"
                  strokeOpacity=".85"
                  strokeWidth="1.6"
                />
                <path
                  d="M101 201 C118 215 137 232 153 250"
                  stroke="#FFF7F2"
                  strokeOpacity=".85"
                  strokeWidth="1.3"
                />
                <path
                  d="M119 216 L121 204
                    M133 229 L144 219
                    M140 236 L137 245"
                  stroke="#FFF7F2"
                  strokeOpacity=".65"
                  strokeWidth="1.1"
                />

                {/* Large right leaf */}
                <path
                  d="M162 295
                    C180 263 213 251 239 269
                    C228 297 195 310 162 295Z"
                  fill="#F8C9B9"
                  fillOpacity=".22"
                  stroke="#FFF7F2"
                  strokeOpacity=".85"
                  strokeWidth="1.6"
                />
                <path
                  d="M169 294 C190 284 211 275 234 270"
                  stroke="#FFF7F2"
                  strokeOpacity=".85"
                  strokeWidth="1.3"
                />
                <path
                  d="M190 285 L188 298
                    M208 278 L215 288
                    M220 274 L225 280"
                  stroke="#FFF7F2"
                  strokeOpacity=".65"
                  strokeWidth="1.1"
                />

                {/* Small lower leaf */}
                <path
                  d="M164 342
                    C140 329 121 341 118 360
                    C139 369 156 358 164 342Z"
                  fill="#F8C9B9"
                  fillOpacity=".15"
                  stroke="#FFF7F2"
                  strokeOpacity=".75"
                  strokeWidth="1.5"
                />
                <path
                  d="M123 358 L164 342"
                  stroke="#FFF7F2"
                  strokeOpacity=".75"
                  strokeWidth="1.2"
                />

                {/* Natural stem tip */}
                <path
                  d="M176 381 C178 391 185 398 194 402"
                  stroke="#F8C9B9"
                  strokeOpacity=".9"
                  strokeWidth="1.5"
                />

                {/* Small botanical accents */}
                <path
                  d="M65 52 C57 44 57 35 63 29
                    M225 46 C233 41 240 43 244 50
                    M242 238 C249 230 257 229 264 234"
                  stroke="#F8C9B9"
                  strokeOpacity=".85"
                  strokeWidth="1.4"
                />
              </g>
            </svg>

            {/* Brand content */}
            <div className="relative z-10 max-w-full pr-5 sm:pr-0">
              <Link
                href="#home"
                aria-label="Resh Thayani home"
                className="inline-block"
              >
                <span
                  className="block text-[48px] leading-none text-[#FFF7F2] sm:text-[58px] lg:text-[64px]"
                  style={{ fontFamily: "var(--font-instrument), serif" }}
                >
                  Resh Thayani
                </span>
              </Link>

              <p
                className="mt-5 text-[22px] italic leading-tight text-[#F8C9B9] sm:mt-6 sm:text-[25px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Beauty in full bloom.
              </p>

              <p
                className="max-w-[300px] text-[12px] leading-6 text-[#FFF7F2]/80 sm:text-[13px]"
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  marginTop: "18px",
                }}
              >
                Thoughtfully created looks that celebrate your individuality and
                make every special moment feel like your own.
              </p>

              <div
                className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#FFF7F2]/90"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                <MapPin
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#F8C9B9]"
                />
                Hyderabad, India
              </div>
            </div>
          </div>

          {/* Booking panel */}
          <div className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-[6px] border border-[#FFF7F2]/20 bg-[#A74363]/35 p-5 sm:p-8 lg:p-10">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[2.5px] text-[#F8C9B9]"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              A day worth remembering
            </p>

            <h2
              className="mt-5 max-w-sm text-[30px] font-normal leading-[1.25] sm:mt-6 sm:text-[36px] lg:text-[40px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Your story. Your beauty. Your moment.
            </h2>

            <p
              className="max-w-sm text-[13px] leading-7 text-[#FFF7F2]/85"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                marginTop: "18px",
              }}
            >
              Have a celebration coming up? Let&apos;s talk about your vision
              and make your special day feel even more personal.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                backgroundColor: "#FFF7F2",
                color: "#B84F70",
              }}
              className="mt-7 inline-flex min-h-[48px] w-fit max-w-full items-center justify-center gap-2 rounded-[5px] border border-[#FFF7F2] px-5 text-center text-[11px] font-semibold tracking-wide transition-colors duration-200 hover:!bg-[#F8C9B9] hover:!text-[#B84F70]"
            >
              <span style={{ color: "#B84F70" }}>Book Your Date</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                style={{ color: "#B84F70" }}
              />
            </a>
          </div>
        </div>

        {/* Social connections and navigation */}
        <div className="mt-8 border-y border-[#FFF7F2]/25 py-6 sm:mt-12 sm:py-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            {/* Let's connect */}
            <div>
              <p
                className="mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#F8C9B9]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                Let&apos;s connect
              </p>

              <p
                className="mb-5 max-w-[330px] text-[21px] leading-snug text-[#FFF7F2] sm:text-[23px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                A little hello can start something beautiful.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Resh Thayani on Instagram"
                  className="group inline-flex items-center gap-2 text-[12px] text-[#FFF7F2] transition-colors hover:text-[#F8C9B9]"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                >
                  <svg
                    aria-hidden="true"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                  <span>Instagram</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Resh Thayani on WhatsApp"
                  className="group inline-flex items-center gap-2 text-[12px] text-[#FFF7F2] transition-colors hover:text-[#F8C9B9]"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                >
                  <MessageCircle size={17} strokeWidth={1.6} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Footer navigation */}
            <nav aria-label="Footer navigation" className="md:justify-self-end">
              <p
                className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#F8C9B9]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                Explore
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-x-7">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                    className="group relative w-fit py-1 text-[12px] font-medium text-[#FFF7F2] transition-colors duration-200 hover:text-[#F8C9B9]"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#F8C9B9] transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Brand tagline */}
        <div className="py-6 text-center sm:py-9">
          <p
            className="mx-auto max-w-full text-[21px] italic leading-snug tracking-wide text-[#FFF7F2] sm:text-[28px]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Elevating Your Natural Beauty.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex min-w-0 flex-col items-center gap-2 border-t border-[#FFF7F2]/25 pt-4 pb-2 text-center text-[10px] leading-relaxed text-[#FFF7F2]/80 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-5 sm:text-left">
          <p className="max-w-full break-words">© {currentYear ?? ""} Resh Thayani. All rights reserved.</p>
          <p className="max-w-full break-words">Makeup artistry by Reshma Thayani.</p>
        </div>
      </div>
    </footer>
  );
}
