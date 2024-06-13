import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
