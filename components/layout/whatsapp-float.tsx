"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";

export function WhatsAppFloat({ whatsappNumber }: { whatsappNumber: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.a
      href={buildWhatsAppLink(defaultWhatsAppMessage, whatsappNumber)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar o Quintal Pet Shop no WhatsApp"
      className="fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-[0_8px_24px_-6px_rgba(44,99,62,0.55)] transition-colors hover:bg-forest-deep md:right-8"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
      initial={{ opacity: 0, scale: 0.6, y: 16 }}
      animate={
        visible
          ? { opacity: 1, scale: [0.6, 1.08, 1], y: 0 }
          : { opacity: 0, scale: 0.6, y: 16 }
      }
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}
