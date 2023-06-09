import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamza Khan",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
