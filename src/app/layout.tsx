import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "IMDb clone built with nextjs and tailwindcss",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
