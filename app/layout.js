// app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import Analytics from "@/components/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const GTM_ID = "GTM-P6HCGPB2";

export const metadata = {
  title: "Arcade & Family Entertainment Center | Timezone India",
  description:
    "Discover endless fun at Timezone India! From arcade games to bowling and bumper cars, our family entertainment centers offer something for all. Visit us today!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* GTM Script (Head) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM NoScript (Body) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Analytics/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
