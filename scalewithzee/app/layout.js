import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ScaleWithZee - 6-Month Growth Program for Service-Based Businesses",
  description:
    "Transform your service-based business with ScaleWithZee. A 6-month growth program designed to attract customers, automate bookings, and increase sales. Limited to 5 businesses per cohort.",
  keywords: [
    "business growth",
    "service-based business",
    "automation",
    "sales growth",
    "customer acquisition",
    "booking automation",
    "business scaling",
  ],
  authors: [{ name: "Zeedevit" }],
  creator: "Zeedevit",
  publisher: "Zeedevit",
  openGraph: {
    title: "ScaleWithZee - 6-Month Growth Program",
    description:
      "Transform your service-based business with our proven 6-month growth program. Attract customers, automate bookings, and increase sales.",
    url: "https://scalewithzee.com",
    siteName: "ScaleWithZee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleWithZee - 6-Month Growth Program",
    description:
      "Transform your service-based business with our proven 6-month growth program.",
    creator: "@zeedevit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main className="max-w-8xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
