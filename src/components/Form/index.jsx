import React from "react";

const index = ({ onSubmit, onChangeName, onChangeEmail, onChangePhone }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Fulano Letal"
          onChange={(e) => onChangeName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="fulanoletal@email.com"
          onChange={(e) => onChangeEmail(e.target.value, "setName")}
        />
      </div>

      <div>
        <label htmlFor="tel">Telefono</label>
        <input
          type="tel"
          id="tel"
          placeholder="341699632"
          onChange={(e) => onChangePhone(e.target.value)}
        />
      </div>

      <button className="btn btn-primary">Terminar Compra</button>
    </form>
  );
};

export default index;
