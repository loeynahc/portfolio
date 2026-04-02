import Nav      from '@/components/Nav/Nav'
import PaperPlaneIntro  from '@/components/Animation/PaperPlaneIntro'
import Hero     from '@/components/Hero/Hero'
import About    from '@/components/About'
import Skills   from '@/components/Skills/Skills'
import Projects from '@/components/Sort/Projects'
import Crafts   from '@/components/Craft/Crafts'
import Contact  from '@/components/Sort/Contact'
import Footer   from '@/components/Footer/Footer'
import Cat from "@/components/Animation/Cat"

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        {/* <PaperPlaneIntro /> */}
        <Cat />
        <Hero />
        {/* <About /> */}
        <Skills />
        {/* <Projects /> */}
        {/* <Crafts /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
