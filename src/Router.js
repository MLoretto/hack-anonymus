import React, { Component } from 'react';
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import ListaCategoria from './Componentes/listaCategoria/ListaCategoria';
import Inicio from './Componentes/inicio/Inicio';

import Subirarchivo from './Componentes/VistaPrincipal/Subirarchivo';


class Routers extends Component {
  render(){
    return(
      <ReactRouter>
        <App>
        <Route path="/" component={() => {
            return  <Redirect to="/inicio"></Redirect>
          }}></Route>

        <Route path="/inicio"  component= {Inicio}></Route>
        <Route path="/subirarchivo" component={Subirarchivo}></Route>
          <Route path="/lista"  component={ListaCategoria}></Route>

        </App>
      </ReactRouter>
    )

  }
}
export default Routers


