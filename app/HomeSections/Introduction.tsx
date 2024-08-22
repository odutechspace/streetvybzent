import {Button} from "@nextui-org/button";
import {FaArrowRightLong} from "react-icons/fa6";

const Introduction = () => {
    return (
        <section className="x-pad image_positioning relative flex justify-center items-center h-[100vh] bg-black/60 z-30"
             style={{backgroundImage: "url('/home/place-holder-bg.jpg')"}}
        >
            <div className="absolute w-full h-full bg-black/35 z-10"/>
            <div className="max-width w-full z-20">
                <div className="flex flex-col gap-5 w-full md:max-w-[70%] lg:max-w-[50%] text-white text-lg ">
                    <p><b>Streetvybz Entertainment.</b> DJs. <b>MCs.</b> Event Lighting. <b>AV Hire.</b> Special Effects.</p>
                    <h2 className="text-5xl lg:text-6xl xl:text-7xl">We help you create the event everyone will love</h2>
                    <p className="italic">“Highly recommend this amazing team. Everything they did was seamless!”</p>
                    <Button className="flex flex-row gap-2 font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                        <FaArrowRightLong />
                        What we offer
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Introduction;