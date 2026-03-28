import { Outlet } from "react-router-dom";

function AdminDashboardLayout() {
    return (
        <div className="admin-dashboard-layout">
            <Outlet />
        </div>
    )
}

export default AdminDashboardLayout