import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ImageWithAlt = ({ src, alt, className }) => (
    <img loading="lazy" src={src} className={className} alt={alt} />
);

const InfoSection = ({ rating, room }) => (
    <section className="flex lg:self-center lg:mt-0 mt-4 md:mt-16">
        <div className="flex items-center justify-between gap-20 w-full max-w-md lg:flex-col lg:items-start lg:gap-0">
            <div className="flex gap-3 items-center">
                <p className="bg-[#003B95] text-white text-xs p-2">Rating: {rating}</p>
            </div>
            <div className="flex flex-col justify-center align-center mt-8 gap-2">
                <p className="text-lg text-neutral-700">Rs.{room.price}</p>
                <p className="text-xs text-neutral-400">+ Rs.{room.costDetails.taxesAndFees} taxes and charges</p>
            </div>
        </div>
    </section>
);

const HotelCard = ({ hotelInfo, room }) => {
    const imageIndex = room.roomNumber % hotelInfo.images.length;
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full p-6 lg:gap-10 border border-gray">
            <div>
                <ImageWithAlt src={hotelInfo.images[imageIndex]} className="h-[254px] w-[304px]" />
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
                <div className="lg:max-w-md flex flex-col lg:mt-0 text-xs">
                    <h2 className="text-lg text-blue-600">{hotelInfo.name}</h2>
                    <address className="mt-2 lg: text-blue-500">
                        {hotelInfo.location}
                    </address>
                    <div className="flex flex-col px-2 mt-6">
                        <strong className="text-zinc-700">{room.roomType}</strong>
                        <p className="text-zinc-700">{room.bedSize}</p>
                        <p className="text-zinc-700">Max Guests: {room.maxGuests}</p>
                    </div>
                    <div className="mt-8">
                        <div className="text-xs text-blue-700 flex flex-col gap-1">
                            {hotelInfo.amenities.map((amenity, index) => (
                                <p key={index}><FontAwesomeIcon icon={faCheck} className="mr-2 text-xs" />{amenity}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <InfoSection rating={hotelInfo.rating} room={room} />
            </div>
        </div>
    );
};

export default HotelCard;

