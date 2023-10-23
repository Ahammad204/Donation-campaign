import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryDetailsCard = ({ categoryDetails }) => {

    const { id, picture, title,  text_button_bg, price, description } =
        categoryDetails || {};


          const handleDonateBtn = () => {
            toast("Wow! You've done a remarkable work");
          
            const addDonationArray = JSON.parse(localStorage.getItem('donate')) || [];
          
            const isDuplicate = addDonationArray.some(item => item.id === categoryDetails.id);
          
            if (!isDuplicate) {
              addDonationArray.push(categoryDetails);
              localStorage.setItem('donate', JSON.stringify(addDonationArray));
            }
          };
          

    return (
        <div>
      
            <div className="card w-auto h-96 card-compact bg-base-100 shadow-xl " style={{

                backgroundImage: `url(${picture})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="flex-grow"></div>
                <div className='bg-black bg-opacity-75 p-3 '>
                    <button onClick={()=>handleDonateBtn()} className="btn btn-primary border-none" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                </div>

            </div>

            <div>
                <h1 className='text-4xl font-bold mt-14'>{title}</h1>
                <p className='text-base font-normal mt-6'>{description}</p>
            </div>


        </div >
    );
};

export default CategoryDetailsCard;