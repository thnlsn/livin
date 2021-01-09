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
import { features, story, homes, gallery, footer } from './database';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features features={features} />
      <Story story={story} />
      <Homes homes={homes} />
      <Gallery gallery={gallery} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
