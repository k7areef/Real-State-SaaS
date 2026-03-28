import { Outlet } from "react-router-dom";

function HostDashboardLayout() {
    return (
        <div className="host-dashboard-layout">
            <Outlet />
        </div>
    )
}

export default HostDashboardLayout;