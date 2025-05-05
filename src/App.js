import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import PlayComputer from './routes/PlayComputer';

import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
        <>
          <Sidebar />
          <MainContent />
        </>
          } />
        <Route path='/play-computer' element={
        <>
          <Sidebar />
          <PlayComputer />
        </>
      } />
      </Routes>

          
    </div>
  );
}

export default App;