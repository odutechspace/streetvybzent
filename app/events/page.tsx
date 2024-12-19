import Introduction from "@/app/events/sections/Introduction";
import EventCard from "@/components/card/EventCard";
import events from "@/data/events.json";
import {FaCircleDot} from "react-icons/fa6";

const Events = () => {

    return (
        <>
            <Introduction imageURL="/events/events-bg.png">
                <h2 className="text-5xl 2xl:text-6xl font-title font-bold my-8 text-white/85">Upcoming Events</h2>
            </Introduction>
            <div className="xy-pad bg-footer_bg flex justify-center">
                <div className="flex flex-col gap-6 w-full max-w-[1200px] text-white/85">
                    <div className="flex flex-row gap-3 items-center text-white/75">
                        <h2 className="text-3xl 2xl:text-4xl font-title font-bold my-8">There are no upcoming events </h2>
                        <div className="flex flex-row gap-2">
                            {
                                [...new Array(3)].map((_, index) =>
                                    <FaCircleDot size={12} key={index}/>
                                )
                            }
                        </div>
                    </div>
                   {/* {
                        events.length > 0 ?
                            <>
                                {
                                    events.map(event =>
                                        <EventCard key={event.id} {...event} />
                                    )
                                }
                            </>
                            :
                            <div className="flex flex-row gap-3 items-center text-white/75">
                                <h2 className="text-3xl 2xl:text-4xl font-title font-bold my-8">There are no upcoming events </h2>
                                <div className="flex flex-row gap-2">
                                    {
                                        [...new Array(3)].map((_, index) =>
                                            <FaCircleDot size={12} key={index}/>
                                        )
                                    }
                                </div>
                            </div>
                    }*/}

                </div>
            </div>
        </>
    );
}

export default Events;