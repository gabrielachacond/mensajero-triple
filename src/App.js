import React from "react";
import "./styles.css";
import ListaMensajes from "./components/ListaDeMensajes";

export default function App() {
  return (
    <div className="App">
      <h1>Mensajeros</h1>
      <ListaMensajes />
    </div>
  );
}
