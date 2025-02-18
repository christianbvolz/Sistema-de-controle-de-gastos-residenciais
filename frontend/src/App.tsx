import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserListPage from "./pages/userList/userList";
import TransactionListPage from "./pages/transactionList/transactionList";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<UserListPage />} />
      <Route path="/transactions" element={<TransactionListPage />} />
    </Routes>
  );
}

export default App;
