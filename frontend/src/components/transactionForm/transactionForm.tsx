import { useEffect, useState } from "react";
import "./transactionForm.style.css";
import { createTransaction, listAllUsers } from "../../api/requests";
import { user } from "../../types/types";
import {
  validateTransactionDescription,
  validateTransactionType,
  validateTransactionValue,
  validateUserId,
} from "../../validations/validations";

type formProps = {
  handleModal: () => void;
};

function TransactionForm({ handleModal }: formProps) {
  useEffect(() => {
    const fetch = async () => {
      const usersList = await listAllUsers();
      setUsers(usersList);
    };

    fetch();
  }, []);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState<"despesa" | "receita">("despesa");
  const [users, setUsers] = useState<user[]>([]);
  const [userId, setUserId] = useState("1");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createTransaction(description, +value, type, +userId);
      setDescription("");
      setValue("");
      setType("despesa");
      setUserId("1");
      handleModal();
      alert("Transação cadastrada com sucesso!");
      window.location.reload();
    } catch (e: unknown) {
      alert("Precisa ser maior de 18 anos para cadastrar um receita!");
      console.log(e);
    }
  };

  return (
    <>
      <h1>Cadastro de Transações</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <textarea
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            min="0"
            step=".01"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </label>
        <label>
          Tipo de transação:
          <select
            onChange={({ target }) =>
              setType(target.value as "receita" | "despesa")
            }
          >
            <option value={"despesa"}>Despesa</option>
            <option value={"receita"}>Receita</option>
          </select>
        </label>
        <label>
          Pessoa:
          <select onChange={({ target }) => setUserId(target.value)}>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>

        <button
          disabled={
            !(
              validateTransactionDescription(description) &&
              validateTransactionValue(+value) &&
              validateTransactionType(type) &&
              validateUserId(+userId)
            )
          }
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
