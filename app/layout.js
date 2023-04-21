import '../styles/globals.css'
import { Navigation } from "../components/Navigation"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Prueba Next.js</title> 
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
