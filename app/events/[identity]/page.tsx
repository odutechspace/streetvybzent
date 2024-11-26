import {FaLocationDot} from "react-icons/fa6";
import {MdMapsHomeWork} from "react-icons/md";
import Image from "next/image";
import {FaMoneyCheckAlt, FaRegCalendarAlt} from "react-icons/fa";

import Introduction from "@/app/events/sections/Introduction";
import TimePending from "@/components/UI/TimePending";
import SocialsShare from "@/components/UI/SocialsShare";
import EventDetailsItemCard from "@/components/card/EventDetailsItemCard";
import events from "@/data/events.json";
import {monthIndexToNameMapper} from "@/_helpers/TimeUtil";
import {EventData, EventDate} from "@/components/card/EventCard";
import Footer from "@/components/UI/Footer";


const Events = ({params: {identity}} : { params: { identity: string }}) => {
    const selectedEvent = events.find((event: EventData) => event.id === identity);
    const {year, month, day}: EventDate = selectedEvent?.date ?? {year: 0, month: 0, day: 0, hour: 0, minute: 0,second: 0};

    return (
        <>
            <Introduction imageURL="/events/events-bg.png">
                <div className="flex flex-col gap-8 py-8">
                    <h2 className="text-[40px] sm:text-5xl 2xl:text-6xl font-title font-bold text-white/85">{selectedEvent?.title}</h2>
                    <p className="text-white/75">{`${day} ${monthIndexToNameMapper(month)} ${year} @${selectedEvent?.location?.venue}`}</p> {/*23 August 2027 @The times center Mahattan New*/}
                    <TimePending {...selectedEvent?.date}/>
                </div>
            </Introduction>
            <div className="xy-pad--2  flex justify-center bg-gray_bg">
                <div className="max-width py-20 sm:py-0 w-full flex flex-col lg:flex-row gap-6">
                    <div className="sm:rounded-md overflow-hidden flex flex-col gap-6 w-full lg:w-3/5 order-2 lg:order-1">
                        <div className="flex flex-col bg-white">
                            <Image src="/events/events-samp2.png" alt="bg-image" width={1000} height={1000} className="w-full h-auto object-cover" />
                            <div className="flex flex-col gap-6 p-6">
                                {
                                    selectedEvent?.description.map((par, idx) =>
                                        <p key={idx} className="text-medium">{par}</p>
                                    )
                                }
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold">Share This Event</p>
                                    <SocialsShare />
                                </div>
                            </div>
                        </div>
                        <div className="sm:rounded-md bg-white">
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
                    <div className="flex flex-col sm:rounded-md h-fit w-full lg:w-2/5 bg-white order-1 lg:order-2">
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