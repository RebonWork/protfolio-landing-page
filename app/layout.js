import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
import { ThemeProvider } from "@/utils/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Flowify",
  description: "Portfolio Landing Page Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className + " " + poppins.className + " bg-background"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics/>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
