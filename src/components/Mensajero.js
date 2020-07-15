import React from "react";
import { v4 as uuidv4 } from "uuid";
import MensajesEnviados from "./MensajesEnviados";
import "../styles.css";

class Mensajero extends React.Component {
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
        <h2>Mensajero</h2>
        <form className="form">
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.handleClick}> enviar</button>
        </form>
        <MensajesEnviados
          data={this.state.mensajes}
          onDelete={this.handleClickDelete}
        />
      </div>
    );
  }
}

export default Mensajero;
