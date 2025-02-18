import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import { listAllTransactions } from "../../api/requests";
import { transaction } from "../../types/types";
import "./transactionList.style.css";

function TransactionListPage() {
  const [transactions, setTransactions] = useState<transaction[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const allTransactions = await listAllTransactions();

      setTransactions(allTransactions);
    };

    fetch();
  }, []);

  return (
    <div>
      <Header />
      <div className="transaction-list">
        <h2>Lista de Transações</h2>
        <table>
          <thead>
            <tr>
              <th>Usúario</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(
              ({ id, description, type, value, user: { name } }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{type}</td>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionListPage;
