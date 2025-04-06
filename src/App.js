import Home from './Components/pages/Home';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';
import { Analytics } from "@vercel/analytics/react"
import Quotes from './Components/pages/Quotes';
import Date from './Components/pages/Date';
function App() {
  return (
    <>
    <Router>
      <Container customclass="min-height">
      <Routes>
        <Route  path="/" element={<Home />} > </Route>
        <Route  path="/falas" element={<Quotes />} > </Route>
        <Route  path="/date" element={<Date />} > </Route>
      </Routes>
      </Container>
      <Footer/>
    </Router>
    <Analytics/>
    </>
  );
}

export default App;
