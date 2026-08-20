"use client";

import { createContext, useContext } from "react";

const AdminModeContext = createContext(false);

/** Server Component (layout) decide `isAdmin` lendo o cookie; aqui só distribuímos pro resto da árvore. */
export function AdminModeProvider({
  isAdmin,
  children,
}: {
  isAdmin: boolean;
  children: React.ReactNode;
}) {
  return <AdminModeContext.Provider value={isAdmin}>{children}</AdminModeContext.Provider>;
}

export function useAdminMode() {
  return useContext(AdminModeContext);
}
