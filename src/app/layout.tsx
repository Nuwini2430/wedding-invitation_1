import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ravindu & Minuri | Wedding Invitation",
  description:
    "Join Ravindu Dilshan and Minuri Laknadi as they celebrate their special day on 21 October 2026 at River Bank Hotel.",
  openGraph: {
    title: "Ravindu & Minuri | Wedding Invitation",
    description:
      "Join Ravindu Dilshan and Minuri Laknadi as they celebrate their special day on 21 October 2026 at River Bank Hotel.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ravindu & Minuri Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravindu & Minuri | Wedding Invitation",
    description:
      "Join Ravindu Dilshan and Minuri Laknadi as they celebrate their special day on 21 October 2026 at River Bank Hotel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
