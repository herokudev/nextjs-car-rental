import './globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Car Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
