
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Templates';
import Searchbar from './components/Searchbar';
import ImageDetail from './components/ImageDetail';
import DownloadPage from './components/DownloadPage';
import OrderSummary from './components/OrderSummary';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import ThankYou from './components/Thank-you';
import Footer from './components/Footer';
import Cancel from './components/Cancel';
import Templates from './components/Templates';
import WebHosting from './components/WebHosting';
import ContactForm from './components/ContactForm';
import PricingPage from './components/Pricing';








function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Always visible */}
      <Navbar />
      <Searchbar />
      {/*Main content area */}
      <main className='flex-1 flex flex-col'>
      {/* Dynamic Menu Links */}
      <Routes>
        <Route path='/' element={<Templates/>} />
        <Route path='/details/:public_id' element={<ImageDetail />} />
        <Route path='checkout' element={<OrderSummary />} />
        <Route path='/download' element={<DownloadPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogDetail />} />
        <Route path='/Thank-you' element={<ThankYou />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/webhosting' element={<WebHosting />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/pricing' element={<PricingPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );

}

export default App;

