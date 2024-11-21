import Image from "next/image";
import {FaRegCalendarAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {Button} from "@nextui-org/button";

const EventCard = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 bg-white/5 p-6">
            <div className="h-auto w-full lg:order-2">
                <Image src="/events/events-samp.jpg" alt="event-bg-image" height={500} width={500} className="h-auto w-full lg:h-full lg:w-auto object-cover" />
            </div>
            <div className=" flex flex-col gap-6 lg:min-w-[60%] xl:min-w-[65%] lg:order-1">
                <h2 className="text-2xl md:text-4xl font-title font-medium">TRΔP TOUR</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <FaRegCalendarAlt className="text-primary_red/60 text-lg md:text-xl"/>
                        <p className="text-lg md:text-xl">12 OCTOBER</p>
                    </div>
                    <div className="flex items-center flex-row flex-wrap gap-x-2">
                        <div className="flex flex-row items-center gap-2">
                            <FaLocationDot className="text-primary_red/60 text-lg md:text-xl"/>
                            <span className="font-medium">SYDNEY, AUSTRALIA</span>
                        </div>
                            <p className="text-lg md:text-xl flex flex-wrap items-end">
                                <span className="text-[12px] sm:text-[13px] uppercase text-white/75 flex flex-row gap-x-2"><span className="event--sign">@</span>Rio Costa Palace Club</span>
                            </p>
                    </div>
                    <p className="text-white/75 text-medium">
                        {"Don't"} land dominion thing face. Whales you after. Divide seas unto days herb. Wherein winged be unto.
                        Our a bring herb. Heaven together. A, blessed upon greater seed. Set {"Don't"}. Behold fish make said divided moved air in unto.
                    </p>
                    <div className="flex flex-row flex-wrap gap-4">
                        <Button radius={'sm'} size={"sm"} className="bg-blue-700/85 text-white font-medium text-lg cursor-pointer hover:bg-footer_bg w-full sm:w-fit"><p className="text-medium">VIEW DETAILS</p></Button>
                        <Button radius={'sm'} size={"sm"} className="bg-primary_red/85 text-white font-medium text-lg cursor-pointer hover:bg-footer_bg w-full sm:w-fit"><p className="text-medium">BOOK TICKETS</p></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;