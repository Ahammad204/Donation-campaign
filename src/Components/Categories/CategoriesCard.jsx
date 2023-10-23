import { Link } from "react-router-dom";

const CategoriesCard = ({ categorie, searchTexts }) => {
    const { id, picture, categoryy, title, card_bg, category_bg, text_button_bg } =
        categorie || {};

    if (searchTexts && searchTexts !== categoryy) {
        return null; 
    }

    return (
        <div className="">

            <Link to={`/categoryDetails/${id}`}>
            <div 
                className="card card-compact bg-base-100 shadow-xl"
                style={{ backgroundColor: card_bg }}
            >
                <figure>
                    <img src={picture} alt={categoryy} />
                </figure>
                <div className="card-body">
                    <div
                        className="w-fit p-2 rounded-lg"
                        style={{ backgroundColor: category_bg }}
                    >
                        <h2 className=" card-title" style={{ color: text_button_bg }}>
                            {categoryy}
                        </h2>
                    </div>
                    <p className="text-xl font-semibold" style={{ color: text_button_bg }}>
                        {title}
                    </p>
                </div>
            </div></Link>

        </div>
    );
};

export default CategoriesCard;
