import Image from "next/image";
import {FaRegCalendarAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {Button} from "@nextui-org/button";
import {HiAtSymbol} from "react-icons/hi";
import Link from "next/link";

import {monthIndexToNameMapper} from "@/_helpers/TimeUtil";

export type EventDate =  {
    year: number | 0,
    month: number | 0,
    day: number | 0,
    hour: number | 0,
    minute: number | 0,
    second: number | 0
}
export type EventLocation = {
    country: string,
    city: string,
    venue: string
}
export interface EventData {
    id: string,
    title: string,
    date: EventDate,
    price?: number,
    tickets?: {
        single?: number,
        double?: number,
    },
    location: EventLocation,
    summary: string,
    description: string[]
}
const EventCard = ({id, title, date, location, summary}: EventData) => {

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 bg-white/5 p-4 sm:p-6">
            <div className="h-auto w-full lg:order-2">
                <Image src="/events/events-samp.jpg" alt="event-bg-image" height={500} width={500} className="h-auto w-full lg:h-full lg:w-auto object-cover" />
            </div>
            <div className=" flex flex-col gap-6 lg:min-w-[60%] xl:min-w-[65%] lg:order-1">
                <h2 className="text-2xl md:text-4xl font-title font-medium">{title}</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <FaRegCalendarAlt className="text-primary_red/60 text-lg md:text-xl"/>
                        <p className="text-lg md:text-xl">{`${date.day} ${monthIndexToNameMapper(date?.month)}, ${date.year}`}</p>
                    </div>
                    <div className="flex items-center flex-row flex-wrap gap-x-2">
                        <div className="flex flex-row items-center gap-2">
                            <FaLocationDot className="text-primary_red/60 text-lg md:text-xl"/>
                            <span className="font-medium">{`${location.city}, ${location.country}`}</span>
                        </div>
                            <p className="text-lg md:text-xl flex flex-wrap items-end">
                                <span className="text-[12px] sm:text-[13px] uppercase text-white/75 flex flex-row items-center gap-x-2"><span className="event--sign"><HiAtSymbol /></span>{location.venue}</span>
                            </p>
                    </div>
                    <p className="text-white/75 text-medium">{summary}</p>
                    <div className="flex flex-row flex-wrap gap-4">
                        <Button as={Link} href={`events/${id}`} radius={'sm'} className="custom-btn--2 bg-blue-700/85 text-white font-medium text-lg cursor-pointer hover:bg-footer_bg w-full sm:w-fit">
                            View Details
                        </Button>
                        <Button radius={'sm'} as={Link} target="_blank" href="https://streetvybzent.hustlesasa.shop/" className="custom-btn--2 bg-primary_red/85 text-white font-medium text-lg cursor-pointer hover:bg-footer_bg w-full sm:w-fit">
                            Book Tickets
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;