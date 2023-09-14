import React from 'react';
import ChocolateList from "./components/ChocolateList";
import Navbar from "./components/Navbar";
import ChocoContext from "./Context";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <ChocoContext>
      <Navbar />
      <ChocolateList />
    </ChocoContext>
    <Footer />
    </>
    

  );
}

export default App;
