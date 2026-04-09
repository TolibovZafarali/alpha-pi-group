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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCondensed(latest > 24);
  });

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={
          isCondensed
            ? {
                backgroundColor: "rgba(5, 5, 5, 0.88)",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }
            : {
                backgroundColor: "rgba(5, 5, 5, 0.14)",
                borderColor: "rgba(255, 255, 255, 0.04)",
              }
        }
        className="border-b backdrop-blur-xl"
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Container className="flex items-center justify-between gap-6 py-4">
          <a
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#top"
          >
            <BrandLogo className="w-[132px] sm:w-[152px]" priority />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {navigation.map((item) => (
              <a
                className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <ButtonLink href={ctaHref}>Contact</ButtonLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className={cx(
              "inline-flex h-11 w-11 items-center justify-center border text-white transition hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:hidden",
              isCondensed ? "border-white/14 bg-white/[0.03]" : "border-white/10 bg-black/10",
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
            className="border-b border-white/10 bg-black/95 backdrop-blur-2xl xl:hidden"
            exit={{ opacity: 0, y: -14 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="pb-8 pt-4">
              <div className="border-t border-white/10 pt-6">
                {navigation.map((item, index) => (
                  <a
                    className={cx(
                      "block border-b border-white/10 py-5 text-3xl tracking-[-0.06em] text-white transition hover:text-foreground-soft",
                      index === 0 && "border-t border-white/10",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <ButtonLink className="justify-center" href={ctaHref}>
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
