import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

import Logout from './Components/Logout';
import Guidelines from './Components/Guidelines';
import AddVoters from './Components/AddVoters';
// import ViewVoters from './Components/ViewVoters';
import VoterID from './Components/VoterID';
import Registration from './Components/Registration';



function App() {
  return (
  <div>
    
    <BrowserRouter>

       <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="Guidelines" element={<Guidelines />} />
        <Route path="AddVoters" element={<AddVoters />} />
        <Route path="VoterID" element={<VoterID />} />
        <Route path="Logout" element={<Logout />} />
       </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
