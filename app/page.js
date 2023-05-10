import { Footer, Navbar } from '../components';
import { About, Categories, Hero } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Categories />
    <Footer />
  </div>
);

export default Page;
