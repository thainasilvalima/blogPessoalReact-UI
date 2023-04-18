
import './App.css';
import NavBar from './componentes/estaticos/NavBar/NavBar';
import Footer from './componentes/estaticos/Footer/Footer';
import CadastroUsuario from './componentes/CadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login/Login';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';




function App() {
  return (
    <>
      <NavBar />
      
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />



        </Routes>

        <Footer />

      </BrowserRouter>




    </>


  );
}

export default App
