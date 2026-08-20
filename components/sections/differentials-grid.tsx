"use client";

import { motion } from "motion/react";
import { HandHeart, Leaf, ShieldCheck } from "lucide-react";
import { gridStagger, fadeUp } from "@/lib/motion";
import { differentials } from "@/lib/business";

const icons = [ShieldCheck, Leaf, HandHeart];

export function DifferentialsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={gridStagger}
      className="mt-14 grid gap-5 md:grid-cols-3"
    >
      {differentials.map((item, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group rounded-[var(--radius-lg)] border border-cream/10 bg-night-card p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-cream/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/8 text-terracotta transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-display text-xl text-cream">{item.title}</h3>
            <p className="mt-3 text-[0.94rem] leading-relaxed text-cream/60">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
