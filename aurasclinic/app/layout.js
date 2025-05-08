import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AURA’S Clinic & Emergency Health Care Center - 24/7 Doctor on Call",
  description:
    "AURA’S Clinic offers round-the-clock emergency care, home doctor visits, ECG services, and general health checkups in your area. Trusted for quality and compassionate medical services.",
  keywords: [
    "AURA’S Clinic",
    "24/7 emergency clinic",
    "doctor home visit",
    "clinic near me",
    "best clinic in kamothe",
    "ECG test clinic",
    "emergency healthcare center",
    "general physician",
    "online doctor consultation"
  ],
  metadataBase: new URL("https://aurasclinic.com"),
  openGraph: {
    title: "AURA’S Clinic & Emergency Health Care Center",
    description:
      "Visit AURA’S Clinic for 24/7 emergency care, doctor home visits, ECG diagnostics, and regular health checkups. Quality care you can trust.",
    url: "https://aurasclinic.com",
    siteName: "AURA’S Clinic",
    type: "website",
    locale: "en_US",
    // images: [
    //   {
    //     url: "https://aurasclinic.com/assets/og-image.jpg", // Replace with real OG image
    //     width: 1200,
    //     height: 630,
    //     alt: "AURA’S Clinic Banner",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA’S Clinic & Emergency Health Care Center",
    description:
      "24/7 Emergency Care | Home Doctor Visits | ECG | General Health Checkups | Trusted Clinic in Kamothe",
    // images: ["https://aurasclinic.com/assets/og-image.jpg"], // Replace if needed
    site: "@aurasclinic", // Optional
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#2b7fff",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
