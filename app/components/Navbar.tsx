"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
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

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu when the current page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the mobile menu with Escape and return focus to its toggle.
  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleNavigation = () => {
    // Move focus before the menu becomes hidden.
    menuButtonRef.current?.focus();
    setMenuOpen(false);
  };

  const closeMenu = () => {
    // Return focus to a visible control before hiding the menu.
    menuButtonRef.current?.focus();
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#B84F70]/15 bg-[#FFF7F2]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:min-h-[80px] sm:px-8 lg:px-[5%] xl:min-h-[86px]"
      >
        {/* Brand logo */}
        <a
          href="/"
          aria-label="Resh Thayani home"
          onClick={handleNavigation}
          className="shrink-0 leading-none"
          style={{ fontFamily: "var(--font-instrument), serif" }}
        >
          <span className="block whitespace-nowrap text-[29px] font-normal tracking-normal text-[#B84F70] sm:text-[36px] lg:text-[40px]">
            Resh Thayani
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 xl:flex 2xl:gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavigation}
                aria-current={active ? "page" : undefined}
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: active ? "#B84F70" : "#3F3438",
                }}
                className="group relative whitespace-nowrap py-3 text-[11px] font-medium transition-colors duration-200 hover:text-[#B84F70] 2xl:text-[13px]"
              >
                {link.label}

                <span
                  className={`absolute bottom-2 left-0 h-[1.5px] w-full origin-left bg-[#B84F70] transition-transform duration-300 ease-out ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop booking button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book your date through WhatsApp"
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            backgroundColor: "#B84F70",
            color: "#FFF7F2",
          }}
          className="hidden min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-[5px] border border-[#B84F70] px-4 text-[11px] font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:!bg-[#A74363] hover:!text-[#FFF7F2] xl:inline-flex 2xl:px-5"
        >
          <span style={{ color: "#FFF7F2" }}>Book Your Date</span>
          <ArrowUpRight
            size={15}
            strokeWidth={2}
            style={{ color: "#FFF7F2" }}
          />
        </a>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#B84F70]/25 bg-[#FCE8E1]/50 text-[#B84F70] transition-colors hover:bg-[#F8C9B9]/50 xl:hidden"
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.7} />
          ) : (
            <Menu size={21} strokeWidth={1.7} />
          )}
        </button>
      </nav>

      {/* Responsive mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`absolute left-0 top-full w-full border-b border-[#B84F70]/20 bg-[#FFF7F2] shadow-[0_16px_32px_rgba(63,52,56,0.08)] transition-all duration-200 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-h-[calc(100dvh-72px)] w-full max-w-[600px] overflow-y-auto px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          {/* Menu heading */}
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#B84F70]"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Explore
          </p>

          {/* Mobile navigation links */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigation}
                  aria-current={active ? "page" : undefined}
                  style={{
                    color: active ? "#B84F70" : "#3F3438",
                  }}
                  className="group flex min-h-[54px] items-center justify-between gap-4 border-b border-[#B84F70]/12 transition-colors duration-200 hover:text-[#B84F70]"
                >
                  <span
                    className="flex items-center gap-4 py-3 text-[22px] leading-tight sm:text-[24px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    <span className="w-5 text-[10px] tracking-wide text-[#B84F70]/70">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#EFA6B6] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile booking button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Book your date through WhatsApp"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              backgroundColor: "#B84F70",
              color: "#FFF7F2",
            }}
            className="mt-5 inline-flex min-h-[45px] w-full items-center justify-center gap-2 rounded-[6px] border border-[#B84F70] px-5 text-[10px] font-semibold tracking-[0.08em] transition-colors duration-200 hover:!bg-[#A74363] hover:!text-[#FFF7F2]"
          >
            <span style={{ color: "#FFF7F2" }}>Book Your Date</span>
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              style={{ color: "#FFF7F2" }}
            />
          </a>

          {/* Single tagline below the booking button */}
          <p
            className="mt-3 text-center text-[13px] italic leading-relaxed text-[#79666A]/85"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Let&apos;s make your beautiful moments unforgettable.
          </p>
        </div>
      </div>
    </header>
  );
}