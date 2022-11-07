import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import Login from './pages/login';
import Salles from './pages/salles';

function App() {

  return (
    // <div className="App">
      
    // </div>
    <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="salles" element={<Salles />} />
                <Route path="*" element={<Main />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
