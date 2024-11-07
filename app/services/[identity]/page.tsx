'use client'

import Image from "next/image";
import IntroSection from "@/app/services/sections/IntroSection";
import services from "@/data/services.json";

interface Service {
    id: string,
    title: string,
    "image_bg": string,
    "image_intro": string,
    images?: string[],
    description: string[],
    serviceItems: {
        id: number,
        title: string,
        image: string,
        description: string[]
    }[]
}
const Service = ({params: { identity } } : { params: { identity: string } }) => {
    const service: Service = services.find((service: Service) => service.id === identity) ?? services[0];
    const images: string[] = service?.images ? service.images : [];
    const serviceItems: any = images.length === 0 ? service.serviceItems : new Array(1);
    console.log("images.length > 0: ", images.length > 0);
    const ServiceItem = (props: any) => {
        const {id, title, description, image} = props;
        const imageStart = id % 2 === 0;
        console.log("images.length > 0: ", images.length > 0);
        // ${id === 0 ? "py-24 lg:py-48" :  id === lastIdx ? "pt-12 pb-24 lg:pt-24 lg:pb-48" : "py-12 lg:py-24"}
        return (
            <div className={`x-pad flex justify-center 
                            py-24
                            ${imageStart ? "bg-[#F4F4F4]" : ""}`
                            }>
                <div className="max-width w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full">
                        {
                            images.length > 0 ?
                                images.map(image =>
                                    <div key={image} className="overflow-hidden h-auto w-full lg:h-full lg:min-w-[400px] lg:w-auto object-cover rounded-md max-h-[600px]">
                                        <Image src={`/services/${identity}/${image}`} alt="service item" width={800} height={1000} className=" w-full h-auto"/>
                                    </div>
                                )
                                :
                                <>
                                    <div className="overflow-hidden h-auto w-full lg:h-full lg:min-w-[400px] lg:w-auto object-cover rounded-md">
                                        <Image src={`/services/${identity}/${image}`} alt="service item" width={800} height={1000} className=" w-full h-full"/>
                                    </div>
                                    <div className={`flex flex-col gap-5 text-lg justify-center ${imageStart ? "" : "lg:row-start-1"}`}>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full">{title}</h2>
                                        {
                                            description.map((par: any, idx: number) =>
                                                <p key={idx} className="tracking-wide" >{par}</p>
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


  return (
      <>
          <IntroSection title={service.title} identity={identity} image_bg={service.image_bg} image_intro={service.image_intro} description={service.description}/> {/*title, paragraphs*/}
          <div className="flex flex-col">
              {
                  [...serviceItems].map( ( serviceItems , idx ) =>
                          <ServiceItem key={idx}  {...serviceItems} {...images}/>/*title, detail*/
                  )
              }
          </div>
      </>
  )
}

export default Service;

/*

{
    "id": 1,
    "title": "",
    "description": [
    ""
],
    "serviceItems": [
    {
        "id": 0,
        "title": "",
        "image": "",
        "description": [
            ""
        ]
    }
]
}
*/
