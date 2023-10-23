import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";




const Home = () => {

    const categories = useLoaderData()

    
    return (
        <div className="">
        
            <Banner categories={categories}></Banner>
        
        </div>
    );
};

export default Home;