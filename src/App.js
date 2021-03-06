import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListasCitas from './components/ListasCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if (citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    });

  }

  borrarCita = id => {
    //leer el state
    // console.log(id);
    const citasActuales = [...this.state.citas];
    
    //borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el state

    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
        titulo={'Administrador de Pacientes Veterinaria'}
        />
      <div className="row">
        <div className="col-md-6">
          <AgregarCita
            crearCita = {this.crearCita}
          />
        </div>
        <div className="col-md-6">
          <ListasCitas
            citas = {this.state.citas}
            borrarCita = {this.borrarCita}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
