
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import CadastroUsuario from './componentes/CadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login/Login';


function App() {
  return (
    <>
      <NavBar />
      
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        </Routes>

        <Footer />

      </BrowserRouter>




    </>


  );
}

export default App
