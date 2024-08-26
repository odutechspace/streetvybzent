import Image from "next/image";

const About = () => {
  return (
      <section className="x-pad flex justify-center">
          <div className="max-width w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 w-full">
                  <div className="flex items-center">
                      <Image src="/home/about/about-us.jpg" alt="about-image" width={600} height={700} className="h-auto w-full lg:h-full lg:w-auto object-cover"/>
                  </div>
                  <div className="flex flex-col gap-5 text-lg">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full">Who are Streetvybz Entertainment?</h2>
                      <p className="tracking-wide">
                          At Streetvybz Entertainment, we’re the team that helps you create unforgettable events. We’re passionate about what we do and take pride in standing out from the usual DJ and AV companies. {"We're"} always pushing boundaries, constantly innovating, and ensuring that ALL our clients have the most memorable events.
                      </p>
                      <p className="tracking-wide">
                          With talented DJs and MCs, cutting-edge lighting design, production, and special effects, our event portfolio includes numerous weddings, school events, corporate functions, and private gatherings. We are Streetvybz Entertainment, the full-service event company dedicated to making your event loved by EVERYONE.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default About;

