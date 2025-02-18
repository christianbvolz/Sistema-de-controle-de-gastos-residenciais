import { userlist } from "../../types/types";

type totalProps = {
  users: userlist[];
};

function Total({ users }: totalProps) {
  const totalArray = users.reduce(
    (acc, { receitaTotal, despesaTotal }) => {
      const somaReceita = acc[0] + receitaTotal;
      const somaDespesa = acc[1] + despesaTotal;
      const saldoFinal = acc[2] + (receitaTotal - despesaTotal);
      return [somaReceita, somaDespesa, saldoFinal];
    },
    [0, 0, 0]
  );

  const [totalReceita, totalDespesa, saldoFinal] = totalArray;
  
  return (
    <>
      <div className="total-receita-despesa">
        <h2>Consulta de totais:</h2>
        <h3>Total Receitas: {totalReceita}</h3>
        <h3>Total Despesas: {totalDespesa}</h3>
        <h3>Saldo Final: {saldoFinal}</h3>
      </div>
    </>
  );
}

export default Total;
