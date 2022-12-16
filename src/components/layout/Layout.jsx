import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout() {
    return (
        <>
            <header className="container">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;