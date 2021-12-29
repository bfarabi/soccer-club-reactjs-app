import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './Component/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

import Error from './Component/Error/Error';
import ClubDetails from './Component/ClubDetails/ClubDetails';



function App() {
  
  return (
    <div >
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<Main /> } />
      <Route path="/home" element={<Main />} />
      <Route path="*" element={<Error />} />
      <Route path="/club/:clubId" element={<ClubDetails />} />
      
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
