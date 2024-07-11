import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import './globals.css';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <NavBar />
          {/* <Search /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}