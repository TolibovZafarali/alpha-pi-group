"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cx } from "@/lib/cx";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  amount?: number;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  scale?: number;
  x?: number;
  y?: number;
};

export function Reveal({
  amount = 0.2,
  children,
  className,
  delay = 0,
  once = true,
  scale = 0.98,
  x = 0,
  y = 28,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cx(className)}
      initial={
        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale, x, y }
      }
      transition={{ duration: prefersReducedMotion ? 0.35 : 0.8, delay, ease }}
      viewport={{ amount, once }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

type StaggerGroupProps = {
  amount?: number;
  children: ReactNode;
  className?: string;
  once?: boolean;
};

export function StaggerGroup({
  amount = 0.2,
  children,
  className,
  once = true,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cx(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cx(className)}
      initial="hidden"
      variants={groupVariants}
      viewport={{ amount, once }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cx(className)}>{children}</div>;
  }

  return (
    <motion.div className={cx(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
