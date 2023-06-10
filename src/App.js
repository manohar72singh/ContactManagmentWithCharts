import './App.css';
import { useLocation } from 'react-router-dom';
import NavRouter from './Components/NavRouter';
import { Link } from 'react-router-dom'
// import Sidebar from './Components/Sidebar';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className='App'>
      <header className='d-flex justify-content-between p-2 bg-dark text-white'>
        <div>
          <h3>{currentRoute === "/chartsMaps" ? "Charts and Maps" : "Contact Management App"}</h3>
        </div>
        <div>
          <Link to="/" className='me-3 p-2' style={{ textDecoration: "none", color: "white" }}> <i class="bi bi-journal-text"></i> Contacts</Link>
          <Link to="/addContact" className='me-3 p-2' style={{ textDecoration: "none", color: "white" }}> <i className="bi bi-journal-plus"></i> Add Contact</Link>
          <Link to="/chartsMaps" className='me-3 p-2' style={{ textDecoration: "none", color: "white" }}> <i className="bi bi-graph-up-arrow"></i> Charts &amp; Maps</Link>
        </div>
      </header>
      <div className='flex w-full '>
        <div className='w-full'>
          <NavRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
