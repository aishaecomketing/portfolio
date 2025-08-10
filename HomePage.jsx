import Hero from "../components/Hero"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Contact from "../components/Contact"
import BrandLogos from "../components/BrandLogos"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BrandLogos />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage


