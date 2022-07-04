import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navbar";

const Layout = () => {
    return(
        <div>
            {/* NavBar */}
            <NavBar/>

            <Outlet></Outlet>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Layout;