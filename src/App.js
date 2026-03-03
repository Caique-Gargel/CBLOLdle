import Home from './Components/pages/Home';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';
import { Analytics } from "@vercel/analytics/react"
import Quotes from './Components/pages/Quotes';
import DateGame from './Components/pages/DateGame';
import Lineup from './Components/pages/Lineup';
import Donation from './Components/pages/Donation';
import Silhouette from './Components/pages/Silhouette';
import Carousel from './Components/layout/Carousel';
import img1 from './imgADS/1.png'
import img2 from './imgADS/2.png'
import img3 from './imgADS/3.png'
import img4 from './imgADS/4.png'
import img5 from './imgADS/5.png'
import img6 from './imgADS/6.png'
import img7 from './imgADS/7.png'
import img8 from './imgADS/8.png'
import img9 from './imgADS/9.png'
function App() {
  return (
    <>
    <Router>
      <Container customclass="min-height">
      <Routes>
        <Route  path="/" element={<Home />} > </Route>
        <Route  path="/falas" element={<Quotes />} > </Route>
        <Route  path="/date" element={<DateGame />} > </Route>
        <Route  path="/lineup" element={<Lineup />} > </Route>
        <Route  path="/donation" element={<Donation />} > </Route>
        <Route  path="/silhouette" element={<Silhouette />} > </Route>
      </Routes>
      </Container>
      <Carousel 
        products={[
          { image: img1, link: 'https://amzn.to/4c6vxft', alt: 'Produto 1' },
          { image: img2, link: 'https://amzn.to/3ZNYJ3z', alt: 'Produto 2' },
          { image: img3, link: 'https://amzn.to/40GMhTq', alt: 'Produto 3' },
          { image: img4, link: 'https://amzn.to/3ZSoFeq', alt: 'Produto 4' },
          { image: img5, link: 'https://amzn.to/3ZWMYYy', alt: 'Produto 5' },
          { image: img6, link: 'https://amzn.to/4rLwJd3', alt: 'Produto 6' },
          { image: img7, link: 'https://amzn.to/4qLWDvT', alt: 'Produto 7' },
          { image: img8, link: 'https://amzn.to/4qTdj4O', alt: 'Produto 8' },
          { image: img9, link: 'https://amzn.to/4tQBgML', alt: 'Produto 9' },
        ]}
      />
     
      <Footer/>
    </Router>
    <Analytics/>
    </>
  );
}

export default App;
