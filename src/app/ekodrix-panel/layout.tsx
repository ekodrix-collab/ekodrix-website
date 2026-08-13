import React from "react";

// Admin Panel Layout — isolates /ekodrix-panel from root layout overflow/scroll rules.
// Root layout conditionally hides Navbar, Footer, FloatingContact on this route.
// This layout ensures the admin dashboard can use its own full-viewport flex layout.

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
