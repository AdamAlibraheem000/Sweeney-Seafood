import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Bar from './pages/Bar';
import Menu from './pages/Menu';
import Feature from './pages/Features';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Bar') {
      return <Bar />;
    }
    if (currentPage === 'Feature') {
      return <Feature />;
    }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} isDesktop={isDesktop}/>
      {renderPage()}
    </div>
  );
}
