import React from "react";
import { v4 as uuidv4 } from "uuid";
import Mensajero from "./Mensajero";

class ListaMensajes extends React.Component {
  state = {
    input: "",
    mensajes: []
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      mensajes: [
        ...this.state.mensajes,
        { mensaje: this.state.input, id: uuidv4() }
      ],
      input: ""
    });
  };

  handleClickDelete = mensajeId => {
    const filteredMesagges = this.state.mensajes.filter(message => {
      return message.id !== mensajeId;
    });
    this.setState({
      mensajes: filteredMesagges
    });
  };

  render() {
    return (
      <div className="counter-ui">
        <div>Mensajes acumulados</div>
        {/* map de todos los mensajes de los mensajeros*/}
        <Mensajero name="Mensajero 1" />
        <Mensajero name="Mensajero 2" />
        <Mensajero name="Mensajero 3" />
      </div>
    );
  }
}

export default ListaMensajes;
