import './App.css';
import { useState } from 'react';
import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar/Navbar';
import FormWrapper from './Components/FormWrapper';

function App() {
  const [nombre, setNombre] = useState( '' );

  return (
      <Wrapper.Provider value={{nombre, setNombre}}>
          <Navbar/>
          <FormWrapper/>
      </Wrapper.Provider>
  );
} 

export default App;
