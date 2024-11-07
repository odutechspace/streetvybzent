import Image from "next/image";

import Introduction from "@/components/UI/Introduction";

const IntroSection = (props: any) => {

  return (
      <Introduction imageURL={`/services/${props.identity}/${props.image_bg}`}>
          <div className="flex flex-col lg:flex-row justify-between gap-20 text-white">
              <div className="flex flex-col gap-10 w-full text-lg text-white/95 justify-center">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white">{props.title}</h2>
                  {
                      props.description.map((par: any, idx: number) =>
                          <p key={idx}>{par}</p>
                      )
                  }
                  {/*<p>
                      Have complete peace of mind with an exceptional team of Wedding DJs and MCs who understand the importance of getting things right on your wedding day.
                  </p>
                  <p>
                      Reliable entertainment that helps you create a fun wedding that’s stress-free, unique & memorable.
                  </p>*/}
                 {/* <div className="flex flex-row gap-5">
                      <Button className="font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                          VIEW DJ PACKAGES
                      </Button>
                      <Button className="font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                          VIEW MC PACKAGES
                      </Button>
                  </div>*/}
              </div>
              <p className="w-full rounded-sm overflow-hidden">
                  <Image src={`/services/${props.identity}/${props.image_intro}`} alt="image" width={1000} height={1000} className="object-cover w-full h-auto max-h-[725px]"/>
              </p>
          </div>
      </Introduction>
  );
}

export default IntroSection;