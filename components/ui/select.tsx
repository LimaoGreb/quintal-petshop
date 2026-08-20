"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Substitui o <select> nativo do navegador (cuja lista suspensa não pode
 * ser estilizada de forma consistente entre navegadores) por um menu
 * customizado, com a cara do site — mantendo teclado, foco e leitor de
 * tela funcionando via Radix.
 */
export function Select({
  value,
  onValueChange,
  options,
  placeholder,
  id,
  name,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  id?: string;
  name?: string;
}) {
  return (
    <RadixSelect.Root value={value || undefined} onValueChange={onValueChange} name={name}>
      <RadixSelect.Trigger
        id={id}
        className="flex w-full items-center justify-between gap-2 rounded-[var(--radius-md)] border border-ink/12 bg-cream px-4 py-3 text-[0.95rem] text-ink transition-colors duration-200 hover:border-ink/20 focus:border-forest focus:outline-none data-[placeholder]:text-ink-faint"
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-4 w-4 shrink-0 text-ink-faint" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={8}
          className="z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--radius-md)] border border-ink/10 bg-card shadow-[0_16px_40px_-16px_rgba(27,31,34,0.25)] data-[state=open]:animate-[fade-in_0.15s_ease-out]"
        >
          <RadixSelect.Viewport className="p-1.5">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--radius-sm)] py-2.5 pl-8 pr-3 text-[0.92rem] text-ink outline-none transition-colors",
                  "data-[highlighted]:bg-forest-light data-[highlighted]:text-forest-deep",
                  "data-[state=checked]:font-medium"
                )}
              >
                <RadixSelect.ItemIndicator className="absolute left-2.5 flex h-4 w-4 items-center justify-center text-forest">
                  <Check className="h-3.5 w-3.5" />
                </RadixSelect.ItemIndicator>
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
