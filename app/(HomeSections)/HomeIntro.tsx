"use client";
import {Button} from "@nextui-org/button";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";

import Introduction from "@/components/UI/Introduction";
import FadeIn from "@/components/animations/FadeIn";


const HomeIntro = () => {

    return (
        <Introduction imageURL="/home/place-holder-bg.jpg">
            <div
                className="flex flex-col gap-5 w-full md:max-w-[70%] lg:max-w-[50%] text-white text-lg ">
                <FadeIn delay={0.5}>
                    <p className="font-title"><b>Streetvybz Entertainment.</b> DJs. <b>MCs.</b> Event Lighting. <b>AV Hire.</b> Special
                        Effects.
                    </p>
                </FadeIn>
                <FadeIn>
                    <h2 className="text-5xl 2xl:text-6xl font-title font-bold my-8">
                        We help you create the event everyone will love
                    </h2>
                </FadeIn>
                <FadeIn delay={1.5}>
                    <Button as={Link} className="custom-btn flex flex-row gap-2 font-bold w-fit text-lg hover:text-primary hover:bg-black/70"
                            href="/#services"
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
