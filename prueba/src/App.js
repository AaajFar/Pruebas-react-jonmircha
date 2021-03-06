import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Propiedades from './Components/Propiedades';
import Estado from './Components/Estado';
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./Components/Eventos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola soy un Componente Funcional expresado desde una prop"/>
        <hr/>
        <Propiedades 
        cadena="Esto es una cadena de texto" 
        numero={19}
        booleano = {false}
        arreglo = {[1,2,3]} 
        objeto = {{nombre: 'Ariel', correo: 'arielfarbiarz@gmail.com'}}
        funcion = {(num) => num * num}
        elementoReact ={<i>Esto es un elemento React</i>}
        componenteReact = {<Componente msg = "Soy un componente pasado como Prop"/>}
        />  
        <hr/>
        <Estado />
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
      </section>
      </header>
    </div>
  );
}

export default App;
