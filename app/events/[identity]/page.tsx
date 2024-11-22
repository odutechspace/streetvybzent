'use client'

import {FaLocationDot} from "react-icons/fa6";
import {MdMapsHomeWork} from "react-icons/md";
import Image from "next/image";
import {FaMoneyCheckAlt, FaRegCalendarAlt} from "react-icons/fa";

import Introduction from "@/app/events/sections/Introduction";
import TimePending from "@/components/UI/TimePending";
import SocialsShare from "@/components/UI/SocialsShare";
import EventDetailsItemCard from "@/components/card/EventDetailsItemCard";


const Events = ({params: {identity}} : { params: { identity: string }}) => {
    console.log("identity: ", identity);

    return (
        <>
            <Introduction imageURL="public/events/events-bg.png">
                <div className="flex flex-col gap-8 py-8">
                    <h2 className="text-[40px] sm:text-5xl 2xl:text-6xl font-title font-bold text-white/85">TRΔP TOUR</h2>
                    <p className="text-white/75">23-25 August 2027 @The times center Mahattan New</p>
                    <TimePending />
                </div>
            </Introduction>
            <div className="xy-pad flex justify-center bg-gray_bg">
                <div className="max-width w-full flex flex-col lg:flex-row gap-6">
                    <div className="rounded-md overflow-hidden flex flex-col gap-6 w-full lg:w-3/5 order-2 lg:order-1">
                        <div className="flex flex-col bg-white">
                            <Image src="/events/events-samp2.png" alt="bg-image" width={1000} height={1000} className="w-full h-auto object-cover" />
                            <div className="flex flex-col gap-6 p-6">
                                <p className="text-medium">
                                    If you’re looking for a way to enjoy the winter season in style, look no further than the Megeve Winter Party! This glamorous event offers a truly unforgettable experience, with luxurious accommodations, world-class cuisine, and exciting entertainment. Located in the picturesque alpine village of Megeve, this event is the perfect way to escape the hustle and bustle of daily life and enjoy the beauty of the winter season. With its charming chalets, snow-covered streets, and stunning mountain views, Megeve is the perfect setting for a winter getaway.
                                </p>
                                <p className="text-medium">
                                    But it’s not just the location that makes the Megeve Winter Party special – it’s also the incredible lineup of activities and entertainment. From exclusive skiing and snowboarding experiences to live music performances and cocktail parties, there’s something for everyone at this event. Of course, no winter party would be complete without delicious food and drink, and the Megeve Winter Party does not disappoint in this regard. Guests can indulge in gourmet meals prepared by world-renowned chefs, as well as fine wines and other beverages to keep them warm on chilly winter nights.
                                </p>
                                <p className="text-medium">
                                    And with luxurious accommodations available, you can rest and relax in style after a day of skiing, partying, and exploring the charming village of Megeve.
                                </p>
                                <p className="text-medium">
                                    So whether you’re a seasoned skier or just looking for a way to enjoy the winter season in style, the Megeve Winter Party is the perfect event for you. With its stunning location, exciting activities, and delicious cuisine, it’s sure to be a winter getaway you’ll never forget. Don’t miss out – buy your tickets today and get ready to experience the ultimate winter party!
                                </p>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold">Share This Event</p>
                                    <SocialsShare />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-md bg-white">
                            <div className="p-6 border-b-1 border-b-gray_primary/20">
                                <p className="text-xl font-bold">Gallery</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
                                <div className="grid gap-2">
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md w-full lg:w-2/5 bg-white order-1 lg:order-2">
                        <div className="p-6 border-b-1 border-b-gray_primary/20">
                            <p className="text-xl font-bold">Event Details</p>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col">
                                <EventDetailsItemCard title={"Date"} value={"January 17, 2023 12:00 pm"} Icon={FaRegCalendarAlt}/>
                                <EventDetailsItemCard title={"Location"} value={"236156, Megeve, France"} Icon={FaLocationDot}/>
                                <EventDetailsItemCard title={"Venue"} value={"Megeve"} Icon={MdMapsHomeWork}/>
                                <EventDetailsItemCard title={"Price"} value={"Ksh. 150"} Icon={FaMoneyCheckAlt} isLast={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;