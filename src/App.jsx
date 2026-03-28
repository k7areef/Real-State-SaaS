import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import HostDashboardLayout from "@layouts/HostDashboardLayout";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";

function App() {
  return (
    <div className="App bg-background text-secondary min-h-screen">
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
        {/* Host Dashboard Layout */}
        <Route path="/dashboard" element={<HostDashboardLayout />}>
          <Route index element={<>Host Dashboard</>} />
        </Route>
        {/* Admin Dashboard Layout */}
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<>Admin Dashboard</>} />
        </Route>
      </Routes>
      {/*  Toaster */}
      <Toaster />
    </div>
  )
}

export default App;