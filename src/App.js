import './App.css';
import React, { useState, useEffect}from 'react';
import RedesSocialesContacto from './components/RedesSocialesContacto';
import CustomNavbar from './components/CustomNavbar';
import CustomCarousel from './components/CustomCarousel';
import { Divider, Spin,FloatButton } from 'antd';
import logoGob from './img/Municipalidad-digital.png'; 
import SobreNosotros from './components/SobreNosotros';
import Feria from './components/feria';
import Footer from './components/footer';

function App() {
  
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  useEffect(() => {
    // Ocultar la bienvenida después de 3 segundos
    const temporizador = setTimeout(() => {
      setMostrarBienvenida(false);
    }, 0);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(temporizador);
  }, []);

  return (

    <>
      <div className="App">
        {mostrarBienvenida && (
            <div className="bienvenida-container">
              <div className="bienvenida">
              <h2>Bienvenido al sitio web <br></br> de #TuMuniCLM</h2>

                <h1>¡Hoy! Concepción Avanza</h1>
                <img src={logoGob} alt="Bienvenida" className='logoGobBienvenida'/>
              </div>
            <div className='spinInicio'>
            <Spin />
            </div>
        </div>
        )}
      </div>

          

      <div className='header'>
        <RedesSocialesContacto></RedesSocialesContacto>
        
        <CustomNavbar></CustomNavbar>
      </div>

      <div className="body">

        <Divider/>

        <CustomCarousel></CustomCarousel>
        <Divider/>

        <Feria></Feria>
              
        <Divider/>

        <SobreNosotros></SobreNosotros>
        <FloatButton.BackTop />
        <Footer></Footer>


      </div>
    </>

  );
  
}
export default App;
