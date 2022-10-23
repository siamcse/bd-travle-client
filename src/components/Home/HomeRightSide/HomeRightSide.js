import React from 'react';


const HomeRightSide = ({ hotel, handleTourPlace }) => {
    const { id, name, img } = hotel;

    

    return (
        <div onClick={() => handleTourPlace(id)} className="card w-3/4 mx-auto h-80 bg-base-100 shadow-xl image-full cursor-pointer">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
        
    );
};

export default HomeRightSide;