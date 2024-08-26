import HeaderFooterWrapper from "@/components/UI/HeaderFooterWrapper";
import Introduction from "@/app/HomeSections/Introduction";
import Services from "@/app/HomeSections/Services";
import About from "@/app/HomeSections/About";
import Testimonials from "@/app/HomeSections/Testimonials";

export default function Index() {
  return (
      <HeaderFooterWrapper>
          <Introduction />
          <Services />
          <About />
          <Testimonials />
      </HeaderFooterWrapper>
  );
}
