import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Sai Darshan | Affordable Budget Hotel | Book Now",
  description: "Experience comfort and luxury at Hotel Sai Darshan. Affordable AC & Non-AC rooms for couples, families & business travelers. Best budget hotel with premium amenities. Book your stay now!",
  keywords: "Hotel Sai Darshan, budget hotel, affordable rooms, AC rooms, Non AC rooms, best hotel, deluxe rooms, Sai Darshan hotel booking, comfortable stay",
  metadataBase: new URL("https://hotelsaidarshan.com"),
  openGraph: {
    title: "Hotel Sai Darshan | Affordable Budget Hotel",
    description: "Premium budget hotel with luxury amenities. AC & Non-AC rooms from ₹1199. Free WiFi, parking, hot water. Book now!",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Sai Darshan | Budget Hotel Booking",
    description: "Affordable luxury hotel with modern amenities",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
