import {FaLocationDot} from "react-icons/fa6";
import {MdMapsHomeWork} from "react-icons/md";
import Image from "next/image";
import {FaMoneyCheckAlt, FaRegCalendarAlt} from "react-icons/fa";

import Introduction from "@/app/events/sections/Introduction";
import TimePending from "@/components/UI/TimePending";
import SocialsShare from "@/components/UI/SocialsShare";
import EventDetailsItemCard from "@/components/card/EventDetailsItemCard";
import events from "@/data/upcoming-events.json";
import {monthIndexToNameMapper} from "@/_helpers/TimeUtil";
import {EventData, EventDate, EventLocation} from "@/components/card/EventCard";
import InstagramEmbed from "@/components/card/InstagramEmbed";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import TiktokEmbed from "@/components/card/TiktokEmbed";

const Events = async ({params,}: { params: Promise<{ identity: string }>; }) => {
    const { identity } = await params;

    const selectedEvent = events.find((event: EventData) => event.id === identity);
    const {year, month, day, hour, minute}: EventDate = selectedEvent?.date ?? {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    };
    const {country, city, venue}: EventLocation = selectedEvent?.location ?? {country: "N/A", city: "N/A", venue: "N/A"}

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
                    <div
                        className="sm:rounded-md overflow-hidden flex flex-col gap-6 w-full lg:w-3/5 order-2 lg:order-1">
                        <div className="flex flex-col bg-white">
                            <Image src="/events/upcoming/babadogo-event-bg.png" alt="bg-image" width={1000}
                                   height={1000} className="w-full h-auto object-cover"/>
                            <div className="flex flex-col gap-6 p-6">
                                {
                                    selectedEvent?.description.map((par, idx) =>
                                        <p key={idx} className="text-medium">{par}</p>
                                    )
                                }
                                <Button radius={'sm'} as={Link} target="_blank"
                                        href="https://streetvybzent.hustlesasa.shop/"
                                        className="custom-btn--1 bg-primary_red/85 text-white font-medium text-lg cursor-pointer hover:bg-footer_bg w-full sm:w-fit">
                                    Book Tickets
                                </Button>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold">Share This Event</p>
                                    <SocialsShare/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:rounded-md bg-white">
                            <div className="p-6 border-b-1 border-b-gray_primary/20">
                                <p className="text-xl font-bold">Gallery</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
                                <div className="grid gap-2">
                                    <div>
                                        <Image width={500} height={500} className="h-auto max-w-full rounded-md"
                                               src="/events/upcoming/babadogo-event-1.jpeg" alt=""/>
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div>
                                        <Image width={500} height={500} className="h-auto max-w-full rounded-md"
                                               src="/events/upcoming/babadogo-event-2.jpeg" alt=""/>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <InstagramEmbed link="https://www.instagram.com/reel/DHLdWTSIWT3/" />
                                </div>
                                <div className="grid gap-2">
                                    <TiktokEmbed link="https://www.tiktok.com/@streetvybzent/video/7483158449996549381" />
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
                                <EventDetailsItemCard title={"Date"}
                                                      value={`${monthIndexToNameMapper(month)} ${day}, ${year} ${hour > 12 && hour - 12}:${minute > 9 ? minute : `0${minute}`} ${hour > 11 ? "pm" : "am"}`}
                                                      Icon={FaRegCalendarAlt}/>
                                <EventDetailsItemCard title={"Location"} value={`${city}, ${country}`}
                                                      Icon={FaLocationDot}/>
                                <EventDetailsItemCard title={"Venue"} value={venue} Icon={MdMapsHomeWork}/>
                                <EventDetailsItemCard title={"Single ticket"}
                                                      value={`Ksh. ${selectedEvent?.tickets?.single}`}
                                                      Icon={FaMoneyCheckAlt} isLast={false}/>
                                <EventDetailsItemCard title={"Ticket for 2"}
                                                      value={`Ksh. ${selectedEvent?.tickets?.double},   [Redeemable for 5.8 Gin Mzinga]`}
                                                      Icon={FaMoneyCheckAlt} isLast={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
// "January 17, 2023 12:00 pm"