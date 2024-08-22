import {FaBars} from "react-icons/fa6";
import {Button} from "@nextui-org/button";
import Image from "next/image";

import {siteConfig} from "@/config/site";
import Socials from "@/components/UI/Socials";

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

  return (
      <div className={`relative flex justify-center w-full  animate-fadeIn z-40`}>
        <div className={`${scrollDisp > 0 ? "fixed bg-white text-secondary animate-fadeIn" : "absolute text-white"} flex w-full x-pad h-[${screenSize < 1000 ? "48" : "112"}px]`}>
            <div className="flex flex-row justify-between items-center w-full border-red-500 ">
                {
                    (screenSize >= 1000 ) ?
                        (screenSize >= 1300) ?
                            <div className="flex items-center w-full h-[112px]">
                                <Socials />
                            </div>
                            :
                            <>
                                <div className="p-5 rounded-2xl">
                                    <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={500} height={500} className="h-full w-auto"/>
                                </div>
                                <div className="flex flex-row gap-8">
                                    <Socials />
                                </div>
                            </>
                        :
                        <>
                            <div className="h-[50px] p-1.5 rounded-2xl text-center flex justify-center items-center">
                                <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={500} height={500} className="h-full w-auto"/>
                            </div>
                            <div className="flex flex-row gap-4 text-2xl">
                                <FaBars />
                            </div>
                        </>
                }
                {
                    (screenSize >= 1300) &&
                    <>
                        <div className="absolute flex flex-row justify-center items-center gap-5 w-full font-bold">
                            {
                                firstHalf?.map(link =>
                                    <p key={link?.id}>{link.label}</p>
                                )
                            }
                            <div className="p-5 rounded-2xl">
                                <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={500} height={500} className="h-full w-auto"/>
                            </div>
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
                    </>
                }
            </div>
        </div>
      </div>
  );
}

export default Header;