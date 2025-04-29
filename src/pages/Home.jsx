import TopBar from '../components/topbar/TopBar'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Badges from '../components/badges/Badges'
import ContactForm from '../components/form/ContactForm'
import Testimonials from '../components/testimonials/Testimonials'
import InstagramFeed from '../components/instagramFeed/InstagramFeed'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Badges />
      <ContactForm />
      <Testimonials />
      <InstagramFeed />
    </div>
  )
}
