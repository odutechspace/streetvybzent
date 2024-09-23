import {Button} from "@nextui-org/button";
import {FaArrowRightLong} from "react-icons/fa6";

import Introduction from "@/components/UI/Introduction";

const HomeIntro = () => {
    return (
        <Introduction imageURL="/home/place-holder-bg.jpg">
            <div className="flex flex-col gap-5 w-full md:max-w-[70%] lg:max-w-[50%] text-white text-lg ">
                <p><b>Streetvybz Entertainment.</b> DJs. <b>MCs.</b> Event Lighting. <b>AV Hire.</b> Special Effects.</p>
                <h2 className="text-5xl lg:text-6xl xl:text-7xl">We help you create the event everyone will love</h2>
                <p className="italic">“Highly recommend this amazing team. Everything they did was seamless!”</p>
                <Button className="flex flex-row gap-2 font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                    <FaArrowRightLong />
                    What we offer
                </Button>
            </div>
        </Introduction>
    );
}

export default HomeIntro;