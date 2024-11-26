
'use client';

import "./Footer.css";
import {FaFacebookF, FaInstagram} from "react-icons/fa6";
import {FaMixcloud} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@nextui-org/button";
import { Parallax} from "react-parallax";
import {useEffect} from "react";

import {siteConfig} from "@/config/site";

const Footer = () => {
    const navItems = siteConfig.navItems;
    const contactUs = navItems[navItems.length-1];

    const MyParallax = () => {
        return (
            <Parallax
                className="flex justify-center object-cover w-full"
                bgImage="footer/footer-samp-2.jpg"
                bgImageStyle={{
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'center bottom',
                    width: "100%",
                    minWidth: "1580px"
                }}
                strength={100}
                blur={1}>
                <div className="relative w-full">
                    <div className="absolute  h-full bg-secondary/55 z-10 left-[-1000px] right-[-1000px]"/>
                    <div
                        className="relative x-pad z-20 flex items-center flex-col gap-8 text-white w-full py-12 md:py-16 lg:py-36 text-center">
                        <h2 className="text-5xl lg:text-6xl xl:text-7xl font-title">{"Let's"} Start This Party</h2>
                        <p className="text-lg md:text-2xl font-bold">Contact Us Today & Experience The Streetvybz
                            Entertainment Difference.</p>
                        <Button as={Link} key={contactUs.id} variant={"solid"} color={"primary"}
                                className="custom-btn font-bold text-xl" href={contactUs.href}>
                            {contactUs.label}
                        </Button>
                    </div>
                </div>
            </Parallax>
            )
    };

  return (
     <footer className="z-20 relative">
         <div className="relative flex flex-col items-center w-full">
             <div className="absolute z-30 bg-black h-0.5 w-full" />
             <div className="relative flex w-full">
                 <MyParallax />
             </div>
         </div>
         <div className="flex flex-col bg-black">
             <div className="w-full flex flex-col items-center">
                 <div className="xy-pad max-width flex flex-row justify-between gap-6 flex-wrap md:flex-nowrap text-primary_text">
                     <div className="h-[200px]">
                         <Image src="/logo/logo-without-bg.png" alt="streetvybz logo" width={500} height={500} className="h-full w-auto"/>
                     </div>
                     <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 flex-wrap xl:flex-nowrap justify-between w-full max-w-[65%]">
                         <div className="flex flex-col gap-2">
                             <h2 className="font-title">QUICK ACCESS</h2>
                             <ul className="flex flex-col gap-0.5">
                                 {
                                     siteConfig.navItems.map(item =>
                                         <li key={item.id}><Link href={item.href}>{item.label}</Link></li>
                                     )
                                 }
                             </ul>
                         </div>
                         <div className="flex flex-col gap-2">
                             <h2 className="font-title">CONTACT</h2>
                             <div className="flex flex-col gap-0.5">
                                 <Link href={`tel:${siteConfig.links.phoneNo}`}>+254 705 050 215</Link>
                                 <Link href={`mailto: ${siteConfig.links.email}`}>info@streetvybzent.com</Link>
                                 <Link href={`sms:${siteConfig.links.phoneNo}`}>Send us a Text Message</Link>
                             </div>
                         </div>
                         <div className="flex flex-col gap-2">
                             <h2 className="font-title">SOCIAL MEDIA</h2>
                             <div className="flex flex-row gap-4 text-xl">
                                 <div className="grid grid-cols-3 gap-4">
                                     <Link href={siteConfig.links.facebook}><FaFacebookF className={"footer-icons"}/></Link>
                                     <Link href={siteConfig.links.instagram}><FaInstagram className={"footer-icons"}/></Link>
                                     <Link href={"/"}><FaMixcloud className={"footer-icons"}/></Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="x-pad flex justify-center w-full border-t-1 border-t-gray_primary/30 py-2">
                     <div className="flex flex-col items-center">
                         <div className="flex flex-row gap-1 text-primary_text font-semibold text-medium">
                             <Link href={"/"} className="text-medium">Privacy Policy</Link>
                             <p className="text-medium">|</p>
                             <Link href={"/"} className="text-medium">Website Terms</Link>
                         </div>
                         <p className="text-medium text-gray_primary">© {new Date(Date.now()).getFullYear()} Streetvybz Entertainment.</p>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
  );
}

export default Footer;
