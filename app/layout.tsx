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
  title: "Storify - File Management System",
  description: "A subscription-based file and folder management system.",
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
