"use client";

import { Provider } from "jotai";
import Navbar from "@/ui/components/Navbar";
import { useAuth } from "@/features/auth/application/hooks/useAuth";

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      <main className="pt-16">{children}</main>
    </>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </Provider>
  );
}
