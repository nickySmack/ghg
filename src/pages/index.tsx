//import { Base } from '../templates/Base';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
//import { Sponsors } from '../templates/Sponsors';
import { VerticalFeatures } from '../templates/VerticalFeatures';

//const Index = () => <Base />;
const Index = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);


export default Index;
