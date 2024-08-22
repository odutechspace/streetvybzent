import Image from "next/image";
import {FaMartiniGlassCitrus, FaRegHeart, FaRegLightbulb, FaRegStar} from "react-icons/fa6";
import {BsFillLightningFill} from "react-icons/bs";
import {CiCloudOn} from "react-icons/ci";
import {HiUserGroup} from "react-icons/hi2";
import {RiGraduationCapLine} from "react-icons/ri";

const services = [
    {
        id: 0,
        name: "Wedding DJs & MC",
        image: "mixer.jpg",
        icon: <FaRegHeart />,
        href: ""
    },
    {
        id: 1,
        name: "Indoor Fireworks",
        image: "mixer.jpg",
        icon: <BsFillLightningFill />,
        href: ""
    },
    {
        id: 2,
        name: "Starlight Dance Floor",
        image: "mixer.jpg",
        icon: <FaRegStar />,
        href: ""
    },
    {
        id: 3,
        name: "Dancing on a Cloud",
        image: "mixer.jpg",
        icon: <CiCloudOn />,
        href: ""
    },
    {
        id: 4,
        name: "Event Lighting and Design",
        image: "mixer.jpg",
        icon: <FaRegLightbulb />,
        href: ""
    },
    {
        id: 5,
        name: "Corporate Events DJs",
        image: "mixer.jpg",
        icon: <FaMartiniGlassCitrus /> ,
        href: ""
    },
    {
        id: 6,
        name: "Party Dj Hire",
        image: "mixer.jpg",
        icon: <HiUserGroup />,
        href: ""
    },
    {
        id: 7,
        name: "School Formal DJs",
        image: "mixer.jpg",
        icon: <RiGraduationCapLine />,
        href: ""
    },

];
const Services = () => {
  return (
      <section className="xy-pad image_positioning flex justify-center">
          <div className="max-width w-full">
              <div className="flex flex-col items-center gap-20">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-[60%] text-center">Reliable entertainment and innovative lighting options for events.</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">

                      {
                          services?.map(service =>
                              <div key={service?.id} className="relative flex rounded-lg h-80 overflow-hidden">
                                  <Image src="/home/services/mixer.jpg" alt="mixer" width={300} height={500} className="absolute w-full h-full z-10"/>
                                  <div className="flex items-end w-full text-white bg-gradient-to-b from-black/5 to-70% to-black/30 p-5 z-20">
                                      <div className="flex flex-col gap-5 text-4xl min-h-[50%]">
                                          {service?.icon}
                                          <p className="text-4xl font-semibold">{service?.name}</p>
                                      </div>
                                  </div>
                              </div>
                          )
                      }
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Services;

