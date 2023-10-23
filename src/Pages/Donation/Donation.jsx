import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const[donates,setDonates] = useState([])
    const [noDonate,setNoDonate] = useState(false)
    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{

        const donateItems =JSON.parse(localStorage.getItem('donate'));
        if(donateItems){

            setDonates(donateItems)

        }else{

            setNoDonate("You are not donate yet")

        }

    },[])

   


    return (
        <div>
            {

                noDonate ? <p className="h-16 flex justify-center items-center font-semibold text-2xl">{noDonate}</p>: <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {

                       isShow ? donates.map(categoryDetails => <DonationCard key={categoryDetails.id} categoryDetails={categoryDetails}></DonationCard>):
                       donates.slice(0,4).map(categoryDetails => <DonationCard key={categoryDetails.id} categoryDetails={categoryDetails}></DonationCard>)
                    }
                </div>

                {donates.length > 4 && <button onClick={()=> setIsShow(!isShow)}  className="px-5 btn bg-[#009444] text-white hover:bg-[#009444]  mx-auto block mt-3">{isShow ? "See Less": "See All"}</button>}
                </div>

            }
        </div>
    );
};

export default Donation;