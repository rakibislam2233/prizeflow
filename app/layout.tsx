import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-custom",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PrizeFlow | Lottery & Giveaway",
  description: "Win big prizes including Cash, Tech, Cars, and Properties in fair and exciting lottery competitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`} suppressHydrationWarning={true}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
