import CategoriesCard from "./CategoriesCard";


const Categories = ({categories,searchTexts}) => {

    

    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {
                    categories?.map(categorie => <CategoriesCard key={categorie.id} categorie={categorie} searchTexts={searchTexts}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;