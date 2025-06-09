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
  title: "description",
  description: "Experience unlimited fun at Timezone India! Enjoy arcade games, bowling, bumper cars, VR, and more at our family entertainment centers across India.",
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
