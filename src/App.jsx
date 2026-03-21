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
      <Testimonials />
      <Projects />
      <CTA onButtonClick={() => alert('Contact form coming soon!')} />
      <Footer />
    </>
  );
}
