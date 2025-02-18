import { useState } from "react";
import { validateUserAge, validateUserName } from "../../validations/validations";
import "./userForm.style.css";
import { createUser } from "../../api/requests";

type formProps = {
  handleModal: () => void;
};

function UserForm({ handleModal }: formProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createUser(name, +age);
      setName('');
      setAge('');
      handleModal();
      alert("Usuário cadastrado com sucesso!");
      window.location.reload();
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <> 
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Idade:
          <input value={age} onChange={({ target }) => setAge(target.value)} />
        </label>
        <button disabled={!(validateUserName(name) && validateUserAge(+age))}>
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default UserForm;
