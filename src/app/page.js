'use client';

import Header from './components/Header';
import HomeSection from './components/HomeSection'
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
    <Header />
    <HomeSection />
    <About />
    <Skills />
    <Projects />
    </>
  )
}
