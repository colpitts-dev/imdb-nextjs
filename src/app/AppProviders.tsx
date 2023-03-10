"use client";

import { ThemeProvider } from "next-themes";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};
