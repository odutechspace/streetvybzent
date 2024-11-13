"use client";
import {Button} from "@nextui-org/button";
import {FaArrowRightLong} from "react-icons/fa6";
import Introduction from "@/components/UI/Introduction";
import FadeIn from "@/components/animations/FadeIn";

const HomeIntro = () => {

    return (
        <Introduction imageURL="/home/place-holder-bg.jpg">
            <div
                className="flex flex-col gap-5 w-full md:max-w-[70%] lg:max-w-[50%] text-white text-lg ">
                <FadeIn delay={0.5}>
                    <p><b>Streetvybz Entertainment.</b> DJs. <b>MCs.</b> Event Lighting. <b>AV Hire.</b> Special
                        Effects.
                    </p>
                </FadeIn>
                <FadeIn>
                    <h2 className="text-5xl lg:text-6xl xl:text-7xl">
                        We help you create the event everyone will love
                    </h2>
                </FadeIn>
                <FadeIn delay={1.5}>
                    <Button className="custom-btn flex flex-row gap-2 font-bold w-fit text-lg"
                            variant={"solid"}
                            endContent={<FaArrowRightLong/>}>
                        What we offer
                    </Button>
                </FadeIn>

            </div>
        </Introduction>
    );
}

export default HomeIntro;
