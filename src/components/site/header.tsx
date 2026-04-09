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
        <Container className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-4">
          <nav className="col-start-1 row-start-1 hidden min-w-0 items-center gap-7 xl:flex">
            {headerNavigation.map((item) => (
              <a
                className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="col-start-2 row-start-1 justify-self-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#top"
          >
            <BrandLogo className="w-[40px] sm:w-[60px]" priority />
          </a>

          <div className="col-start-3 row-start-1 hidden justify-self-end xl:flex">
            <ButtonLink href={contactHref} icon="none">
              Contact
            </ButtonLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className={cx(
              "col-start-3 row-start-1 inline-flex h-11 w-11 justify-self-end items-center justify-center border text-white transition hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:hidden",
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
                {headerNavigation.map((item, index) => (
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
