import HomeIntro from "@/app/HomeSections/HomeIntro";
import Services from "@/app/HomeSections/Services";
import About from "@/app/HomeSections/About";
import Testimonials from "@/app/HomeSections/Testimonials";

export default function Index() {
  return (
      <>
          <HomeIntro />
          <Services />
          <About />
          <Testimonials />
      </>
  );
}
