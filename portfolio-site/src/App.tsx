import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import ProjectDetailPage from './pages/Portfolio/ProjectDetail';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path=":projectId" element={<ProjectDetailPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
