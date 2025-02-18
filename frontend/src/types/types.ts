type user = {
  id: number;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | null;
  transactions: transaction[];
}

type userlist = {
  id: number;
  name: string;
  age: number;
  receitaTotal: number;
  despesaTotal: number;
  total: number;
}

type transaction = {
  id: number;
  description: string;
  value: number;
  type: 'despesa' | 'receita';
  userId: number;
  createdAt: Date;
  updatedAt: Date | null;
  user: user;
}

export type {
  user,
  userlist,
  transaction
};
