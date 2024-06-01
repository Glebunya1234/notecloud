import { url } from "inspector";
import "./globals.css";
import type { Metadata } from "next";
import favicon from "./favicon.ico";
import { Inter, Poppins, Raleway } from "next/font/google";
import { Suspense } from "react";

// const inter = Inter({ subsets: ["latin"] });

const fonts = Poppins({ weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "NoteCloud",
  description:
    "The NoteCloud project is an innovative web application designed for effective self-management and productivity improvement. It is an intelligent system for organizing notes and tasks based on cloud technologies.",
  authors: [{ name: "Kalihailung", url: "https://github.com/Glebunya1234" }],
  keywords: [
    "note",
    "cloud",
    "NoteCloud",
    "Note-Cloud",
    "Note Cloud",
    "organization",
    "productivity",
    "self-menagement",
  ],
  openGraph: {
    title: "NoteCloud",
    description: "Created by Glebunya1234",
    type: "website",

    url: "https://note-cloud-five.vercel.app", // Замініть на реальний URL вашої сторінки
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
          key="viewport"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://note-cloud-five.vercel.app" />
        <meta property="og:title" content="The NoteCloud" />
        <meta
          property="og:description"
          content="The NoteCloud, project is a web application designed for creating, editing, and deleting scheduled tasks."
        />
        <meta property="og:image" content="https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg" />
        <meta name="robots" content="index, nofollow" />
        <meta name="google" content="notranslate" />
      </head>
      {/* <Suspense
        fallback={
          <div className="w-full h-full justify-center items-center flex">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }
      > */}
      <body className={fonts.className}>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}
