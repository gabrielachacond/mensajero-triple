import React from "react";
import { v4 as uuidv4 } from "uuid";

const MensajesEnviados = props => {
  // const { mensajes, onClickDelete } = props;
  return (
    <div>
      <span>Mensajes enviados:</span>
      <div>
        {props.data.map(mensaje => {
          return (
            <div key={uuidv4()}>
              <p>{mensaje.mensaje}</p>{" "}
              <button onClick={() => props.onDelete(mensaje.id)}>
                {" "}
                borrar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MensajesEnviados;
