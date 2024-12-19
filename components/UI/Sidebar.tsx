import {FaXmark} from "react-icons/fa6";
import Link from "next/link";

import {siteConfig} from "@/config/site";
import Socials from "@/components/UI/Socials";


const Sidebar = ({isOpen = false, sidebarHandler} : {isOpen: boolean, sidebarHandler: any}) => {

  return (
      <>
          {
            isOpen  &&
              <div className="fixed top-0 right-0 z-50 h-[100vh] w-[300px] lg:w-[35%] max-w-[360px] bg-white opacity-[98.5%] shadow-md">
                  <div className="absolute flex justify-end w-full p-4">
                      <FaXmark onClick={sidebarHandler} className="text-danger hover:text-primary hover:cursor-pointer"/>
                  </div>
                  <div className="px-6 pt-6 flex flex-col gap-5">
                      <p className="text-2xl font-bold font-title"><span className="text-red-500">Street</span><span className="text-orange-500">Vybz</span><span className="text-green-600"> Ent.</span></p>
                      <nav className="flex flex-col">
                          {
                              siteConfig.navItems.map(option =>
                                  <Link key={option.id} className="font-title py-2" href={option.href} onClick={sidebarHandler}>{option.label}</Link>
                              )
                          }

                      </nav>
                      <Socials />
                  </div>
              </div>
          }
      </>
  );
}

export default Sidebar;