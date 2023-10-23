
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
    const [categoryDetails, setCategoryDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`/donation.json`);
            const data = await response.json();
            const index = data.findIndex((item) => item.id === parseInt(id));
            setCategoryDetails(data[index]);

        };

        fetchData();
    }, [id]);

    console.log(categoryDetails);

    return <div>
        <CategoryDetailsCard categoryDetails={categoryDetails}></CategoryDetailsCard>

    </div>;
};

export default CategoryDetails;
