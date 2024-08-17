'use client'

import {FaSearch} from "react-icons/fa";
import {FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaPhone} from "react-icons/fa6";
import {Button} from "@nextui-org/button";

import {siteConfig} from "@/config/site";



const Header = (props: {screenSize: number, scrollDisp: number}) => {
    const {screenSize, scrollDisp} = props;
    const navItems = siteConfig.navItems;
    const length = navItems?.length;
    const capFirstHalf = length/2;
    const firstHalf = new Array(0);
    const lastHalf = new Array(0);

    navItems.map((item, idx) => {
            if (idx < capFirstHalf) {
                firstHalf.push(item);
            } else {
                lastHalf.push(item);
            }
        }
    );
    const Socials = () => (
        <div className="flex flex-row gap-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaPhone />
            <FaEnvelope />
        </div>
    );

  return (
      <div className={`relative flex justify-center w-full  animate-fadeIn border-b-2`}>
        <div className={`${scrollDisp > 0 ? "fixed bg-white text-secondary animate-fadeIn" : "absolute text-white"} flex w-full x-pad h-[${screenSize < 1000 ? "48" : "112"}px]`}>
            <div className="flex flex-row justify-between items-center w-full border-red-500 ">
                {
                    (screenSize >= 1000 ) ?
                        (screenSize >= 1200) ?
                            <div className="flex items-center w-full h-[112px]">
                                <Socials />
                            </div>
                            :
                            <>
                                <p className="border-2 border-black/50 p-5 rounded-2xl">Logo</p>
                                <div className="flex flex-row gap-8">
                                    <Socials />
                                    <FaSearch className="text-lg"/>
                                </div>
                            </>
                        :
                        <>
                            <p className="border-2 border-black/50 h-[40px] px-2 rounded-2xl text-center flex justify-center items-center">Logo</p>
                            <div className="flex flex-row gap-4 text-lg">
                                <FaSearch />
                                <FaBars />
                            </div>
                        </>
                }
                {
                    (screenSize >= 1200) &&
                    <>
                        <div className="absolute flex flex-row justify-center items-center gap-5 w-full font-bold">
                            {
                                firstHalf?.map(link =>
                                    <p key={link?.id}>{link.label}</p>
                                )
                            }
                            <p className="border-2 border-black/50 p-5 rounded-2xl">Logo</p>
                            {
                                lastHalf?.map(link => (
                                        link?.isBtn ?
                                            <Button key={link?.id} variant={"solid"} color={"primary"} className="text-white font-bold">
                                                {link.label}
                                            </Button>
                                            :
                                            <p key={link?.id}>{link.label}</p>
                                    )
                                )
                            }
                        </div>
                        <FaSearch className="text-lg"/>
                    </>
                }
            </div>
        </div>
      </div>
  );
}

export default Header;