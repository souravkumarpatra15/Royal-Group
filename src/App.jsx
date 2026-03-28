import './styles/global.css';
import {
  Hero,
  FindUs,
  Achievements,
  Testimonials,
  Projects,
  CTA,
  Footer,
} from './components';

export default function App() {
  return (
    <>
      <Hero />
      <FindUs />
      <Achievements />
      <Projects />
      <Testimonials />
      <CTA onButtonClick={() => alert('Contact form coming soon!')} />
      <Footer />
    </>
  );
}
