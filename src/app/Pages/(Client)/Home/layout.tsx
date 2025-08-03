import React from 'react'
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}