"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { navLinks } from "./nav-links";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";
import { cn } from "@/lib/utils";
import { transitionFast } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      id="top"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-ink/[0.06] bg-cream/85 shadow-[0_1px_0_rgba(27,31,34,0.02),0_8px_24px_-16px_rgba(27,31,34,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-cream/75 via-cream/45 to-transparent backdrop-blur-[3px]"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10",
          scrolled ? "py-3.5" : "py-6"
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[0.94rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={buildWhatsAppLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={<WhatsAppIcon className="h-4 w-4" />}
            iconPosition="left"
            className="hidden md:inline-flex !py-2.5 !px-5 text-[0.88rem]"
          >
            WhatsApp
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitionFast}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-cream px-8 pb-8 pt-28 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, ...transitionFast }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ink/[0.06] py-4 text-[1.35rem] font-display text-ink transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.06, ...transitionFast }}
                className="mt-8"
              >
                <Button
                  href={buildWhatsAppLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  iconPosition="left"
                  className="w-full"
                >
                  Chamar no WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
