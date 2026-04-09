"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cx } from "@/lib/cx";

const ease = [0.16, 1, 0.3, 1] as const;

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cx(className)}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      transition={{ duration: prefersReducedMotion ? 0.35 : 0.75, delay, ease }}
      viewport={{ amount: 0.25, once }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cx(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cx(className)}
      initial="hidden"
      variants={groupVariants}
      viewport={{ amount: 0.2, once: true }}
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
