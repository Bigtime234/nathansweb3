import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";


const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeByRiven | Web Development & Crypto Airdrops",
  description: "Expert Web developer, cryptocurrency projects, DeFi applications, NFT platforms, and exclusive crypto airdrop opportunities. Stay updated with the latest Web3 trends and airdrop campaigns.",
  keywords: [
    "web3",
    "crypto",
    "cryptocurrency",
    "blockchain",
    "airdrop",
    "crypto airdrop",
    "web3 developer",
    "DeFi",
    "NFT",
    "smart contracts",
    "ethereum",
    "solana",
    "blockchain developer",
    "crypto news",
    "token airdrop",
    "free crypto",
    "web3 projects"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}