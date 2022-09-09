import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import HomePage from "./components/HomePage";
import DetailGame from "./components/DetailGame";
import SearchGames from "./components/SearchGames";
import SelectLocation from "./components/SelectLocation";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function RequireAuth({ children }) {
  const { access_token } = localStorage;
  if (!access_token) return <Navigate to={"/login"} />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }
      >
        <Route path="" element={<HomePage />} />
        <Route path="search" element={<SearchGames />} />
        <Route path="detail" element={<DetailGame />} />
        <Route path="select" element={<SelectLocation />} />
      </Route>
    </Routes>
  );
}

export default App;
