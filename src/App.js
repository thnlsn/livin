import React from 'react';
import './css/style.css';

// Import Layout Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Realtors from './components/Realtors';
import Features from './components/Features';
import Story from './components/Story';
import Homes from './components/Homes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Import data
import { features } from './database';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features features={features} />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
