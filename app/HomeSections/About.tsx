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
                          Welcome to Street Vybz Entertainment, your one-stop-shop for unforgettable events! {"We're"} a dynamic events management and planning agency specializing in providing top-notch audio-visual services, including sound systems, LED screens, deejays, emcees, décor, seating, stages, and lighting. With a focus on delivering exceptional experiences, we cater to a wide range of events, from corporate occasions to weddings, graduations, birthday parties, school functions, product launches, and team building activities.
                      </p>
                      <p className="tracking-wide">
                          Our team of experts is dedicated to creating memorable events that exceed your expectations. With a passion for delivering exceptional service and attention to detail, we take care of every aspect of your event, ensuring a seamless and enjoyable experience for you and your guests. Let us handle the logistics, so you can focus on what matters most - enjoying the moment. At Street Vybz Entertainment, {"we're"} dedicated to making your event a night to remember.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default About;

