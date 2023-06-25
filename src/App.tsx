import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@pages';
import { Header } from '@components';

function App() {
  return (
    <Router>
      <Header />
      <div className="container py-5 sm:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
