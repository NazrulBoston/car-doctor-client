import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer";
import Navbar from "../pages/Home/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;