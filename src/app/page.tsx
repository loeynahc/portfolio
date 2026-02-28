import Nav      from '@/components/Nav/Nav'
import PaperPlaneIntro  from '@/components/Animation/PaperPlaneIntro'
import Hero     from '@/components/Hero/Hero'
import About    from '@/components/About'
import Skills   from '@/components/Skills'
import Projects from '@/components/Projects'
import Crafts   from '@/components/Crafts'
import Contact  from '@/components/Contact'
import Footer   from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <PaperPlaneIntro />
        <Hero />
        {/* <About /> */}
        <Skills />
        {/* <Projects />
        <Crafts />
        <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
