"use client";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
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
  const [isCondensed, setIsCondensed] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const contactItem = navigation.find(
    (item) => item.label.toLowerCase() === "contact",
  );
  const headerNavigation = navigation.filter(
    (item) => item.label.toLowerCase() !== "contact",
  );
  const contactHref = contactItem?.href ?? ctaHref;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCondensed(latest > 28);
  });

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={
          isCondensed
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "rgba(255, 255, 255, 0.18)",
              }
            : {
                backgroundColor: "rgba(0, 0, 0, 0.42)",
                borderColor: "rgba(255, 255, 255, 0.08)",
              }
        }
        className="border-b backdrop-blur-2xl"
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-3 sm:gap-8 sm:py-4 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
          <a
            className="min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#top"
          >
            <span className="flex items-center gap-4">
              <BrandLogo className="w-[42px] sm:w-[56px]" priority />
              <span className="hidden min-w-0 sm:block">
                <span className="block font-mono text-[10px] tracking-[0.3em] text-white/72 uppercase">
                  Alpha-Pi Group
                </span>
                <span className="mt-1 block max-w-[12rem] text-xs tracking-[0.14em] text-white/44 uppercase">
                  Driver recruiting / carrier support
                </span>
              </span>
            </span>
          </a>

          <nav className="hidden min-w-0 grid-cols-3 gap-px border border-white/10 bg-white/10 xl:grid">
            {headerNavigation.map((item, index) => (
              <a
                className="group flex min-w-[10rem] items-center gap-4 bg-black/70 px-4 py-3 text-left transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:bg-white focus-visible:text-black"
                href={item.href}
                key={item.href}
              >
                <span className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase transition group-hover:text-black/46 group-focus-visible:text-black/46">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] tracking-[0.24em] uppercase">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 xl:flex">
            <div className="text-right">
              <p className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase">
                Open line
              </p>
              <a
                className="group mt-1 inline-flex items-center gap-3 text-sm tracking-[0.18em] text-white transition hover:text-white/72 uppercase"
                href={contactHref}
              >
                Contact
                <span className="h-px w-12 bg-white/26 transition group-hover:w-16" />
              </a>
            </div>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className={cx(
              "inline-flex h-11 w-11 items-center justify-center justify-self-end border text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:hidden",
              isCondensed
                ? "border-white/18 bg-white/[0.03]"
                : "border-white/12 bg-black/20",
            )}
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/10 bg-black/96 backdrop-blur-2xl xl:hidden"
            exit={{ opacity: 0, y: -14 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="pb-8 pt-5">
              <div className="grid gap-8 border-t border-white/10 pt-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white/46 uppercase">
                      Navigation
                    </p>
                    <p className="mt-3 max-w-[14rem] text-sm leading-6 text-foreground-soft">
                      Recruiting, coordination, and direct contact.
                    </p>
                  </div>
                  <span className="editorial-outline text-5xl leading-none font-medium tracking-[-0.1em]">
                    01
                  </span>
                </div>

                <div className="grid gap-px bg-white/10">
                  {headerNavigation.map((item, index) => (
                    <a
                      className="group flex items-center justify-between gap-4 bg-black px-5 py-5 transition hover:bg-white hover:text-black"
                      href={item.href}
                      key={item.href}
                      onClick={closeMenu}
                    >
                      <span className="text-3xl leading-none tracking-[-0.08em]">
                        {item.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/46 transition group-hover:text-black/46">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  ))}
                </div>

                <ButtonLink
                  className="justify-center"
                  href={contactHref}
                  icon="none"
                  onClick={closeMenu}
                >
                  Contact
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
