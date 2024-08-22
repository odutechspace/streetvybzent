import HeaderFooterWrapper from "@/components/UI/HeaderFooterWrapper";
import Introduction from "@/app/HomeSections/Introduction";
import Services from "@/app/HomeSections/Services";

export default function Index() {
  return (
      <HeaderFooterWrapper>
          <Introduction />
          <Services />
      </HeaderFooterWrapper>
  );
}
