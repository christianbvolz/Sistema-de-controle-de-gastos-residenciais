import { useState } from "react";
import Modal from "../modal/modal";
import { NavLink } from "react-router-dom";
import "./header.style.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      {modalOpen && <Modal formType={formType} handleModal={handleModal} />}
      
      <h1>Sistema de Controle de Gastos</h1>
      <nav>
        <NavLink to="/users">Lista de Usúarios</NavLink>
        <NavLink to="/transactions">Lista de Transações</NavLink>
      </nav>
      <div>
      <button
        onClick={() => {
          handleModal();
          setFormType("user");
        }}
      >
        cadastrar pessoa
      </button>
      <button
        onClick={() => {
          handleModal();
          setFormType("transaction");
        }}
      >
        cadastrar transação
      </button>
      </div>
    </div>
  );
}

export default Header;
