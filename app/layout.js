import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata = {
  title: "Ai Short Video Generator",
  description: "short video generator using AI",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${outfit.className} bg-background text-foreground`}>
        
        <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
