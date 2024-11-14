import Image from "next/image";
import {FaHeadphones, FaLightbulb, FaRegHeart, FaRegStar, FaSpeakerDeck, FaTents} from "react-icons/fa6";
import {BsFillLightningFill} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        id: 0,
        name: "LIGHTING",
        image: "event-lighting/lighting-intro.jpg",
        icon: <FaLightbulb />,
        href: "/services/event-lighting"
    },
    {
        id: 1,
        name: "TENTS",
        image: "tents/tents-intro.png",
        icon: <FaTents />,
        href: "/services/tents"
    },
    {
        id: 2,
        name: "SOUND",
        image: "sound/s-intro2.png",
        icon: <FaSpeakerDeck />,
        href: "/services/sound"
    },
    {
        id: 3,
        name: "DJ & MC HIRE",
        image: "sound/mixer.jpg",
        icon: <FaHeadphones />,
        href: "/services/sound"
    },
];
const Services = () => {
  return (
      <section className="xy-pad image_positioning flex justify-center bg-gray-50">
          <div className="max-width w-full">
              <div className="flex flex-col items-center gap-20">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-[60%] text-center font-title uppercase">Reliable entertainment and innovative lighting options for events.</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full">

                      {
                          services?.map(service =>
                              <Link href={service.href} key={service?.id}>
                                  <div className="relative flex h-[500px] overflow-hidden">
                                          <Image src={`/services/${service?.image}`} alt="mixer" width={300} height={500} className="absolute w-full h-full object-cover z-10"/>
                                      <div className="flex items-end w-full text-white bg-gradient-to-b from-black/5 via-black/5 to-black/90 p-5 z-20">
                                          <div className="flex flex-col gap-5 text-4xl">
                                              <span className="text-7xl">{service?.icon}</span>
                                              <p className="text-4xl font-semibold text-start font-title">{service?.name}</p>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          )
                      }
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Services;

