// app/layout.js or app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Arcade & Family Entertainment Center | Timezone India",
  description: "Discover endless fun at Timezone India! From arcade games to bowling and bumper cars, our family entertainment centers offer something for all. Visit us today!",
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
