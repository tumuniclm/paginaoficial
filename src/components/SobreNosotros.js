import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faRoad, faSeedling, faUser, faShieldAlt, faHeartbeat, faTree, faUsers, faBuilding, faWrench } from '@fortawesome/free-solid-svg-icons';
        
import { Tabs, Divider, Collapse, Timeline} from 'antd';
import './SobreNosotros.css';
import FadeInOnScroll from './FadeInOnScroll';

const { TabPane } = Tabs;

const tabContents = [
  {
    label: <FontAwesomeIcon icon={faGraduationCap} />,
    content: (
      <div className='politicaMunicipal'>
        <h2 >Educación</h2>  
        <Timeline
            items={[
            {
                children: 'Colegio Municipal de Educación Diversificada -CMED-',
            },
            {
                children: 'Educación de Mujeres, Jóvenes, Niños y Adultos Mayores',
            },
            {
                children: 'Escuela Municipal de Deporte',
            },
            {
                children: 'Escuela Municipal de Música',
            },
            {
                children: 'Escuela Municipal de Arte',
            },
            {
                children: 'Apoyo al Ministerio de Educación mediante la contratacion de docentes',
            },
            ]}
        />
      </div>
    ),
  },
 
  {
    label: <FontAwesomeIcon icon={faRoad} />,
    content: (
    <div className='politicaMunicipal'>
        <h2>Red Vial</h2>
        <Timeline
            items={[
                {
                    children: 'Adquicisión de Maquinaria para el Municipio',
                },
                {
                    children: 'Conservación de arreteras de tarracería',
                },
                {
                    children: 'Mejoramiento de caminos de terracería en el area urbana',
                },
                {
                    children: 'Mejoramiento de caminos de terracería en el area rural',
                },
                {
                    children: 'Facilitar transporte de personas, productos, materia, animales y cargas en general',
                },
             

           
            ]}
        />
      </div>
    ),
  },
  {
    label: <FontAwesomeIcon icon={faSeedling} />,
    content: (
    <div className='politicaMunicipal'>
        <h2>Agrícola y Pecuario</h2>
        <p>Información específica para Semilla.</p>
      </div>
    ),
  },
  {
    label: <FontAwesomeIcon icon={faUser} />,
    content: (
    <div className='politicaMunicipal'>
        <h2>Servicios Públicos</h2>
        <p>Información específica para Persona.</p>
      </div>
    ),
  },
  {
    label: <FontAwesomeIcon icon={faShieldAlt} />,
    content: (
     <div className='politicaMunicipal'>
        <h2>Seguridad</h2>
        <p>Información específica para Seguridad.</p>
      </div>
    ),
  },
  {
    label: <FontAwesomeIcon icon={faHeartbeat} />,
    content: (
      <div className='politicaMunicipal'>
        <h2>Salud</h2>
        <p>Información específica para Salud.</p>
      </div>
    ),
  },
  {
    label: <FontAwesomeIcon icon={faTree} />,
    content: (
     <div className='politicaMunicipal'> 
        <h2>Medio Ambiente</h2>
        <p>Información específica para Pino.</p>
      </div>
    ),
  },
];

const secciones = [
  {
    icono: faSeedling,
    titulo: 'Chucteros Orgullosos',
    contenido: 'Estamos orgullosos de servir a este bello municipio lleno de gente humilde, amable y trabajadora.',
  },
  {
    icono: faUsers,
    titulo: 'Trabajadores con Experiencia',
    contenido: 'Contamos con profesionales altamente capacitados que trabajan día tras día para poder brindarte la mejor atención y el mejor servicio.',
  },
  {
    icono: faBuilding,
    titulo: 'Servicios para Toda la Población',
    contenido: 'Todos tenemos derecho a llevar una vida digna, por eso trabajamos como Municipalidad para garantizar ese derecho de nacimiento y brindar los mejores servicios que tenemos a tu disposición.',
  },
  // Puedes agregar más secciones según sea necesario
];
const SobreNosotrosPage = () => {
  const tabPosition = 'right'; // Puedes ajustar la posición de las pestañas según tus preferencias (por ejemplo, 'left', 'right', 'top', 'bottom')

  return (
    
        <div className='containerSN'>     
        
            <h1>Sobre Nosotros</h1>

            <h2>Estamos al servicio de nuestro Municipio</h2>

            <p>
            Servir a nuestro municipio es una responsabilidad que llevamos con orgullo y dedicación. Estamos
            comprometidos a mejorar la vida de nuestra población y hacer de Concepción Las Minas un hogar aún más
            maravilloso para todos. <br></br>
            <br></br>
            ¡Juntos construyendo un futuro brillante para nuestro Municipio!
            </p>

            <section>
            <h1>¡Hoy! Concepción Avanza</h1>
            </section>
            <Divider/> 
            <Collapse  bordered={false}
                    size="large"
                    items={[{ key: '1', label: 'Politicas Municipales', children: 
                    <p>Las <b>Politicas Municipales</b> son las <b>acciones</b> que este <b>gobierno municipal</b> con el propósito alcanzar objetivos de 
                    <b> interés público </b>y así garantizar un mejor servicio para el <b>pueblo chuctero.</b> </p> 
                }]} />

        <FadeInOnScroll offset={0}>
        <Divider/> 
            <Tabs tabPosition={tabPosition}>
                {tabContents.map((item, index) => (
                  <TabPane tab={item.label} key={String(index + 1)}>
                    {item.content}
                </TabPane>
                ))}
            </Tabs>

          </FadeInOnScroll>
    <Divider/>

          <FadeInOnScroll offset={500}>
            <div style={{ maxWidth: '800px', margin: 'auto', padding: '16px' }}>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  title="Embedded Video"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/PLjeSD4bN-o?si=MtehpBJ8lrsmpPG9&vq=medium&controls=0&modestbranding=1"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: '0', left: '0', borderRadius:'1em' }}
                />
              </div>
            </div>
          </FadeInOnScroll>

          <Divider/>
          <FadeInOnScroll offset={1000}>

              <h2>¡ES UN HONOR SERVIRTE!</h2>

              <p>
                Nuestro objetivo principal es el <b>avance</b> de Concepción Las Minas, 
                queremos expresar nuestro más sincero agradecimiento por permitirnos <b>servirte.</b> <br></br>
              </p>

          </FadeInOnScroll>
           <Divider/>
          
          <FadeInOnScroll offset={1100}>
          <div>
            {secciones.map((seccion, index) => (
              
              <div key={index} className="d-flex align-items-center">
                <div className="me-4 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={seccion.icono} size="1x" />
                </div>
                <div>
                  <h1>{seccion.titulo}</h1>
                  <p>{seccion.contenido}</p>
                </div>
              </div>
            ))}
          </div>

          <Divider/>

          </FadeInOnScroll>
        </div>
  
  );
};

export default SobreNosotrosPage;