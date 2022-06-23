import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
