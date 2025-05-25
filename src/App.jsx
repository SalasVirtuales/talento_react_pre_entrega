import React from 'react';
import TopBar from './components/TopBar/TopBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HeroSection from './components/HeroSection/HeroSection';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import './App.css'; // For any App-level global styles

function App() {
  return (
    <>
      <TopBar />
      <NavigationBar />
      <HeroSection />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
