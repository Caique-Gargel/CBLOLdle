import Home from './Components/pages/Home';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <Router>
      <Container customclass="min-height">
      <Routes>
        <Route  path="/" element={<Home />} > </Route>
      </Routes>
      </Container>
      <Footer/>
    </Router>
    <Analytics/>
    </>
  );
}

export default App;
