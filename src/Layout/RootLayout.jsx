import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";



const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
           <div className="py-16">
           <Outlet></Outlet>
           
           </div>
           
        </div>
        
        
    );
};

export default RootLayout;