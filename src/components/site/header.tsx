"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
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

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/72 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href="#top"
        >
          <BrandLogo className="w-[140px] sm:w-[164px]" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              className="text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase transition hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground transition hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#080b11]/96 md:hidden"
            exit={{ opacity: 0, y: -12 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="space-y-3 py-5">
              {navigation.map((item) => (
                <a
                  className={cx(
                    "block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium tracking-[0.14em] text-foreground uppercase transition",
                    "hover:border-white/10 hover:bg-white/[0.04]",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink className="mt-2 w-full justify-center" href={ctaHref}>
                Contact
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

