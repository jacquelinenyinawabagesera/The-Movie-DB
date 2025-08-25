import './globals.css';
import Navbar from './components/navBar';
import Footer from './components/footer';

export const metadata = {
  title: 'Moovie',
  description: 'Dynamic Movie Streaming Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
