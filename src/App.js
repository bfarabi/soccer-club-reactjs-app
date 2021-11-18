import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import FriendsDetails from './Components/FriendsDetails/FriendsDetails';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/friend/:fndId" element={<FriendsDetails />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
