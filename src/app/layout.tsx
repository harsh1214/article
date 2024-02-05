import type { Metadata } from "next";
import { Barlow } from "next/font/google";
// https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap
import "./globals.css";
import "./articles.css";
import "./stylesheet.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";

const inter = Barlow({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"], });

export const metadata: Metadata = {
    title: "Articles",
    description: "Gainskills Articles",
    icons: [{ rel: "icon", url: "/public/gs.png" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
