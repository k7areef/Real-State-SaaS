import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";
import CTA from "@components/common/CTA";

function MainLayout() {
    return (
        <div className="main-layout">
            {/* Header */}
            <Header />
            {/* Outlet */}
            <Outlet />
            {/* CTA */}
            <CTA />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout;