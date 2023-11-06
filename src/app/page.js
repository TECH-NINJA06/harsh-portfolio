'use client';

import Image from 'next/image'
import HomeSection from './components/HomeSection'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <HomeSection/>
    <About />
    <Skills />
    <h1>Hello World</h1>
    <Footer />
    </>
  )
}
