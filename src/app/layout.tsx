import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
import { GeistSans } from "geist/font/sans";
import { dark } from "@clerk/themes";
import "@uploadthing/react/styles.css";

export const metadata = {
  title: "Gallery",
  description: "Generated by KaLa",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
