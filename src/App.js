import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
