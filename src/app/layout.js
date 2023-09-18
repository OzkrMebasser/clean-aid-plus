"use client"
import ActionButton from "./components/ActionButton/ActionButton"
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Clean Aid+',
  description: 'Trusted Cleaning Services for Homes and Businesses Across Victoria',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
 
      <body className={inter.className}>
        <ActionButton/>
        {children}
       
      </body>
    </html>
  )
}
