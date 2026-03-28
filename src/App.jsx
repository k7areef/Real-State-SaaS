import { Navigate, Route, Routes } from "react-router-dom";
// Pages:
// # Main Pages:
import HomePage from "@pages/main/HomePage";
// # Auth Pages:
import LoginPage from "@pages/auth/LoginPage";
import SignupPage from "@pages/auth/SignupPage";
// # Dashboard Pages:
// Layouts
import MainLayout from "@layouts/MainLayout";
import AuthLayout from "@layouts/AuthLayout";
import DashboardLayout from "@layouts/DashboardLayout";

function App() {
  return (
    <div className="App bg-background min-h-screen">
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Auth Layout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<>properties</>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;