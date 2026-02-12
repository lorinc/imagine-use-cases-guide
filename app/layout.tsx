import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { buildFullNavigationTree } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Use Case Evaluation Guide - Imagine School",
  description: "A comprehensive guide for evaluating AI-powered tools for Montessori school administration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = buildFullNavigationTree();

  return (
    <html lang="en">
      <body className="antialiased">
        <Sidebar navigation={navigation} />
        <main className="md:ml-[320px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
