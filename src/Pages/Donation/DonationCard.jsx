import { Link } from "react-router-dom";

const DonationCard = ({ categoryDetails }) => {

    const { id, picture, title, text_button_bg, price, description,category_bg,card_bg,categoryy } =
        categoryDetails || {};

    return (
        <div>
            <div className=" h-fit rounded-lg" style={{ backgroundColor: category_bg }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className=" rounded-lg shadow-2xl mr-5" />
                    <div>
                       <div className="w-fit p-2" style={{ backgroundColor: card_bg }}>
                       <h1 className="text-xl font-normal " style={{ color: text_button_bg }}>{categoryy}</h1>
                       </div>
                        <p className="py-2 text-xl font-medium ">{title}</p>
                        <p className="py-2 text-2xl font-medium"  style={{ color: text_button_bg }}> ${price}</p>
            <Link to={`/categoryDetails/${id}`}>
            <button className="btn btn-primary border-none"style={{ backgroundColor: text_button_bg }}>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;