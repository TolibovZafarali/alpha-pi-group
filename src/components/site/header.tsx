"use client";

import { useEffect, useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { cx } from "@/lib/cx";

type NavigationItem = {
  href: string;
  label: string;
};

type HeaderProps = {
  ctaHref: string;
  navigation: readonly NavigationItem[];
};

export function Header({ ctaHref, navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuTop, setMobileMenuTop] = useState(0);
  const [scrollTheme, setScrollTheme] = useState<"dark" | "light">("dark");
  const headerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.28,
  });

  const closeMenu = () => setIsOpen(false);
  const progress = prefersReducedMotion
    ? scrollYProgress
    : smoothScrollYProgress;

  useEffect(() => {
    let frameId = 0;

    const updateScrollTheme = () => {
      const headerBottom = Math.round(
        headerRef.current?.getBoundingClientRect().bottom ?? 0,
      );
      const sampleX = window.innerWidth / 2;
      const sampleY = Math.min(
        Math.max(headerBottom + 1, 0),
        window.innerHeight - 1,
      );
      const theme =
        document
          .elementFromPoint(sampleX, sampleY)
          ?.closest<HTMLElement>("[data-scroll-theme]")
          ?.dataset.scrollTheme === "light"
          ? "light"
          : "dark";

      setScrollTheme((currentTheme) =>
        currentTheme === theme ? currentTheme : theme,
      );
      setMobileMenuTop((currentTop) =>
        currentTop === headerBottom ? currentTop : headerBottom,
      );
    };

    const scheduleThemeUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateScrollTheme);
    };

    scheduleThemeUpdate();
    window.addEventListener("scroll", scheduleThemeUpdate, { passive: true });
    window.addEventListener("resize", scheduleThemeUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleThemeUpdate);
      window.removeEventListener("resize", scheduleThemeUpdate);
    };
  }, [isOpen]);

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) {
      return;
    }

    const root = document.documentElement;
    const updateHeaderHeight = () => {
      root.style.setProperty(
        "--site-header-height",
        `${headerElement.offsetHeight}px`,
      );
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerElement);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md"
        ref={headerRef}
      >
        <Container className="flex items-center justify-between gap-5 py-4">
          <a
            className="min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#top"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3">
              <BrandLogo className="w-8 shrink-0 sm:w-11" priority variant="light" />
              <span className="font-mono text-[11px] tracking-[0.24em] text-white uppercase">
                Alpha-Pi Group
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                className="font-mono text-[11px] tracking-[0.24em] text-white/72 uppercase transition-colors duration-200 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href={ctaHref}>Contact</ButtonLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/12 text-white transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </Container>

        <div
          aria-hidden="true"
          className={cx(
            "pointer-events-none absolute inset-x-0 -bottom-px z-[1] h-[2px] overflow-hidden transition-colors duration-300",
            scrollTheme === "light" ? "bg-black/12" : "bg-white/12",
          )}
        >
          <motion.div
            className={cx(
              "h-full origin-left transition-colors duration-300",
              scrollTheme === "light"
                ? "bg-black shadow-[0_0_10px_rgba(0,0,0,0.18)]"
                : "bg-white shadow-[0_0_12px_rgba(255,255,255,0.42)]",
            )}
            style={{ scaleX: progress }}
          />
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 z-40 overflow-y-auto border-t border-white/10 bg-black/80 backdrop-blur-md md:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            style={{
              top: mobileMenuTop,
              maxHeight: `calc(100dvh - ${mobileMenuTop}px)`,
            }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="grid gap-6 py-6">
              <nav className="grid gap-4">
                {navigation.map((item) => (
                  <a
                    className="font-mono text-[12px] tracking-[0.24em] text-white uppercase transition-colors duration-200 hover:text-white/72"
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <ButtonLink
                className="justify-center"
                href={ctaHref}
                icon="none"
                onClick={closeMenu}
              >
                Contact
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
