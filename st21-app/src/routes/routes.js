import { Routes, Route } from 'react-router-dom';
import LandPage from '../pages/LandPage';
import AboutPage from '../pages/AboutPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/land" element={<LandPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RoutesConfig;
