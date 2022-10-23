import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeLeftSide from './HomeLeftSide/HomeLeftSide';
import HomeRightSide from './HomeRightSide/HomeRightSide';

const Home = () => {
    const hotels = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(hotels[0]);

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    };

    const handleTourPlace = (id) => {
        console.log(id);
        let selectHotel;
        if (id) {
            selectHotel = hotels.find(hotel => hotel.id === id);
            console.log(hotels[0]);
            console.log(selectHotel);
        }

        setSelectedPlace(selectHotel);
    }
    console.log(selectedPlace);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url("${selectedPlace?.img}")` }}>
            <div className='grid grid-cols-2 mt-40'>
                <div className=''>
                    {
                        <HomeLeftSide selectedPlace={selectedPlace} ></HomeLeftSide>
                    }
                </div>
                <div className='mr-10'>
                    <Slider {...settings}>
                        
                            {
                                hotels.map(hotel => <HomeRightSide
                                    key={hotel.id}
                                    hotel={hotel}
                                    handleTourPlace={handleTourPlace}
                                ></HomeRightSide>)
                            }

                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;