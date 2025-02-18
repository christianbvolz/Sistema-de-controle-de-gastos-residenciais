import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Total from "../../components/total/total";
import trashIcon from "../../assets/trash.svg";
import { deleteUser, listAllUsers } from "../../api/requests";
import { userlist } from "../../types/types";
import "./userList.style.css";
import { toFloat } from "../../utils";

function UserListPage() {
  const [users, setUsers] = useState<userlist[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const allUsers = await listAllUsers();
      const userlist = allUsers.map(({ id, name, age, transactions }) => {
        let receitaTotal = 0;
        let despesaTotal = 0;

        transactions.forEach(({ value, type }) => {
          if (type === "despesa") {
            despesaTotal += +value;
          } else {
            receitaTotal += +value;
          }
        });
        receitaTotal = toFloat(receitaTotal);
        despesaTotal = toFloat(despesaTotal);
        const total = toFloat(receitaTotal - despesaTotal);

        return { id, name, age, receitaTotal, despesaTotal, total };
      });
      setUsers(userlist);
    };

    fetch();
  }, []);

  return (
    <div>
      <Header />
      <div className="user-list">
        <h2>Lista de Usuários</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Receita</th>
              <th>Despesas</th>
              <th>Total</th>
              <th>Deletar Pessoa</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ id, name, age, receitaTotal, despesaTotal, total }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{receitaTotal}</td>
                  <td>{despesaTotal}</td>
                  <td>{total}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={async () => {
                        await deleteUser(id);
                        window.location.reload();
                      }}
                    >
                      <img src={trashIcon} alt="test" />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Total users={users} />
      </div>
    </div>
  );
}

export default UserListPage;
