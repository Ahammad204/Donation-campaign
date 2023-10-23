import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link  to={"/"}>
            <img  src={'https://i.ibb.co/tBv4PTR/Logo.png'} alt="Donation Campaign" />
            </Link>
        </div>
    );
};

export default Logo;