"use client";

import {FaEnvelope, FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaXTwitter} from "react-icons/fa6";
import Link from "next/link";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

import {siteConfig} from "@/config/site";
import Introduction from "@/components/UI/Introduction";


const IntroSection = () => {
    const {links} = siteConfig;

    return (
        <Introduction imageURL="/contact/contact-us-bg-dark.png" xyPadVariant={"xy-pad--2"}>
            <div className=" bg-black/50 lg:p-6 backdrop-blur-[2px] sm:rounded-md overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-x-20 gap-y-6 w-full text-white/70">
                    <div className="w-full flex flex-col gap-6 px-6 pt-20 sm:p-6 lg:p-0 justify-between">
                        <h2 className="text-3xl 2xl:text-4xl font-title font-bold text-white/85">CONTACT US</h2>
                        <p>
                            Planning an event or looking for unforgettable experiences?
                            {"Let's"} make it extraordinary! Reach out to us today and let’s bring your vision to life with creativity and passion.
                            Start the journey here!
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-2 text-white/85">
                                <div className="flex flex-row items-center gap-2">
                                    <FaLocationDot size={18}/>
                                    <p>Nairobi, Kenya</p>
                                </div>
                                 <Link href={`tel:${links?.phoneNo}`} className="flex flex-row items-center gap-2">
                                    <FaPhone size={18}/>
                                    <p>{links.phoneNo}</p>
                                </Link>
                                <Link href={`mailto:${links?.email}`} className="flex flex-row items-center gap-2">
                                    <FaEnvelope size={18}/>
                                    <p>{links.email}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 text-lg text-white/85 font-semibold z-30 flex-wrap">
                            <Link href={links?.facebook} target={"_blank"} className="flex flex-row gap-2 items-center">
                                <FaFacebookF />
                                <p>Facebook</p>
                            </Link>
                            <Link href={links?.instagram} target={"_blank"} className="flex flex-row gap-2 items-center">
                                <FaInstagram />
                                <p>Instagram</p>
                            </Link>
                            <Link href={links?.twitter} target={"_blank"} className="flex flex-row gap-2 items-center">
                                <FaXTwitter/>
                                <p>Twitter</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full px-6 pb-20 pt-6 sm:p-6 bg-footer_bg lg:rounded-md flex flex-col gap-6 lg:min-w-[450px]">
                        <h2 className="text-3xl 2xl:text-4xl font-title font-bold text-white/85 text-center">Got Any Questions ?</h2>
                        <form className="flex flex-col gap-4 justify-between h-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input type="text" label="First Name" labelPlacement={'inside'}  radius={'none'} color={'default'}/>
                                <Input type="text" label="Last Name" radius={'none'}/>
                                <Input type="text" label="Phone" radius={'none'}/>
                                <Input type="text" label="Email" radius={'none'}/>
                                <Textarea radius={'none'} label="Your message" labelPlacement={'inside'} className="col-span-1 sm:col-span-2"/>
                            </div>
                            <Button type={'submit'} radius={'none'} color={'primary'} className="custom-btn">Submit Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Introduction>
    );
}

export default IntroSection;
