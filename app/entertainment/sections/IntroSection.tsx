import Introduction from "@/components/UI/Introduction";
import {Button} from "@nextui-org/button";
import Image from "next/image";

const IntroSection = () => {
  return (
      <Introduction imageURL="/home/place-holder-bg.jpg">
          <div className="flex flex-col lg:flex-row justify-between gap-20 text-white">
              <div className="flex flex-col gap-10 w-full text-lg text-white/95">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white">Wedding DJ & MC Hire</h2>
                  <p>
                      Have complete peace of mind with an exceptional team of Wedding DJs and MCs who understand the importance of getting things right on your wedding day.
                  </p>
                  <p>
                      Reliable entertainment that helps you create a fun wedding that’s stress-free, unique & memorable.
                  </p>
                  <div className="flex flex-row gap-5">
                      <Button className="font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                          VIEW DJ PACKAGES
                      </Button>
                      <Button className="font-bold w-fit text-lg" variant={"solid"} color={"primary"}>
                          VIEW MC PACKAGES
                      </Button>
                  </div>
              </div>
              <p className="w-full opacity-95">
                  <Image src="/entertainment/wedding-intro.jpg" alt="image" width={1000} height={1000} className="object-cover w-full h-auto max-h-[725px]"/>
              </p>
          </div>
      </Introduction>
  );
}

export default IntroSection;