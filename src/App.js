import './App.css';
import Banner from './Banner';
import BuyNFT from './buyNFT';
import ColumncontentSection from './columncontentSection';
import ContentSection from './contentSection';
import Header from './Header';
import './Style.scss';
import SliderSection from './Slider';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <BuyNFT/>
      <SliderSection />
      <ContentSection/>
      <ColumncontentSection/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;