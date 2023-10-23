import { useState } from "react";
import Categories from "../Categories/Categories";


const Banner = ({categories}) => {

    const [searchTexts, setSearchTexts] = useState()

    const handleSearch = () => {

        const searchField = document.getElementById('searchField');
        const searchText = searchField.value;
        setSearchTexts(searchText)
        searchField.value = '';

    }


    return (
        <div>
            <div className="">
                <div className="hero h-96 bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/s50w7kr/hub-12-18-charity-Hero-1200x900.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="mb-5 text-3xl font-extrabold">I Grow By Helping People In Need</p>
                            <div className="">
                                <input id="searchField" type="text" className="h-12 sm:w-60 lg:w-80 mb-2 outline-none rounded-md p-4 text-black" placeholder="Search here...." />

                                <button onClick={() => handleSearch()} className="btn ml-2  btn-primary bg-[#FF444A] border-none hover:bg-[#FF444A]">Search</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Categories categories={categories}searchTexts={searchTexts}></Categories>
        </div>


    );
};

export default Banner;