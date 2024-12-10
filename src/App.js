import Home from './Components/pages/Home';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Container from './Components/layout/Container';

function App() {
  return (
    <Router>
      <Container customclass="min-height">
      <Routes>
        <Route  path="/" element={<Home />} > </Route>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
