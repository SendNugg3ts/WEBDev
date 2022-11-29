import React, { useState } from "react";

const randomnames = () => {
  const names = ["marta", "luis", "marcia"];
  let numbers = Math.floor(Math.random() * 3);
  return names[numbers];
};

const Component = () => {
  let [nome, Setnome] = useState("Lipe");
  const clicamento = () => {
    Setnome(randomnames());
  };
  return (
    <main>
      component {nome}
      <button onClick={clicamento()} type="button" class="btn btn-warning">
        Clica aqui
      </button>
    </main>
  );
};

export default Component;
