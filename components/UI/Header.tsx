import {FaBars} from "react-icons/fa6";
import {Button} from "@nextui-org/button";
import Image from "next/image";

import {siteConfig} from "@/config/site";
import Socials from "@/components/UI/Socials";
import Link from "next/link";

const Header = (props: { screenSize: number, scrollDisp: number }) => {
    const {screenSize, scrollDisp} = props;
    const navItems = siteConfig.navItems;
    const length = navItems?.length;

    const firstHalf = new Array(0);
    const lastHalf = new Array(0);

    navItems.map((item, idx) => {
            if (idx < length / 2 - 1) {
                firstHalf.push(item);
            } else {
                lastHalf.push(item);
            }
        }
    );

    return (
        <div className={`relative flex justify-center w-full  animate-fadeIn z-40`}>
            {/*!h-[${screenSize < 1000 ? "30" : "40"}px]*/}
            <div
                className={`${scrollDisp > 0 ? "fixed bg-white text-secondary shadow-md animate-fadeIn" : "absolute text-white"} ${screenSize < 1000 ? "h-[60px]" : " h-[60px]"} flex w-full x-pad`}>
                <div className="flex flex-row justify-between items-center w-full">
                    {
                        (screenSize >= 1000) ?
                            (screenSize >= 1450) ?
                                <div className="flex items-center justify-between w-full h-[92px]">
                                    <Socials/>
                                    <Button key={lastHalf.length - 1} variant={"solid"} color={"primary"}
                                            className="custom-btn text-white font-bold text-lg">
                                        {lastHalf[lastHalf.length - 1].label}
                                    </Button>
                                </div>
                                :
                                <>
                                    <div className=" rounded-2xl">
                                        <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={500}
                                               height={20} className="h-full max-h-[72px] w-auto p-3"/>
                                    </div>
                                    <div className="flex flex-row gap-8">
                                        <Socials/>
                                    </div>
                                </>
                            :
                            <>
                                <div
                                    className="h-[50px] p-1.5 rounded-2xl text-center flex justify-center items-center">
                                    <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={500}
                                           height={500} className="h-full w-auto"/>
                                </div>
                                <div className="flex flex-row gap-4 text-2xl">
                                    <FaBars/>
                                </div>
                            </>
                    }
                    {
                        (screenSize >= 1450) &&
                        <>
                            <div
                                className="absolute left-0 flex flex-row justify-center items-center gap-5 w-full h-full font-light font-title">
                                {
                                    firstHalf?.map(link =>
                                        <p key={link?.id}>{link.label}</p>
                                    )
                                }
                                <Link href={"/"} className={`rounded-full pl-4 pr-3 w-[100px] h-[100px] mt-4 flex justify-center items-center ${scrollDisp > 0 && "bg-white w-[80px] h-[80px] mt-4"}`}>
                                    <Image src="/logo/logo-without-bg-2.png" alt="streetvybz logo" width={200}
                                           height={200} className="h-full w-auto object-contain"/>
                                </Link>
                                {
                                    lastHalf?.map(link => (
                                            (!link?.isBtn) && <p key={link?.id}>{link.label}</p>
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
