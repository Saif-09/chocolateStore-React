import React from 'react';
import ChocolateList from "./components/ChocolateList";
import Navbar from "./components/Navbar";
import ChocoContext from "./Context";

function App() {
  return (
    <ChocoContext>
      <Navbar />
      <ChocolateList />
    </ChocoContext>

  );
}

export default App;
