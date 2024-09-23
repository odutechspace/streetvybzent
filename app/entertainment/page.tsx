import IntroSection from "@/app/entertainment/sections/IntroSection";

const Entertainment = () => {
  return (
      <>
          <IntroSection />
          <div className="xy-pad flex justify-center items-center border-2 border-red-500 lg:h-[100vh] min-h-[800px]">
              <div className="relative flex flex-col justify-end lg:justify-start gap-20 w-full h-full border-2 border-primary ">
                  <div className="lg:absolute z-10 left-0 top-0 w-full h-full lg:max-w-[35%] border-2">
                      <div className="flex flex-col gap-5">
                          <h2 className="text-3xl lg:text-5xl font-bold">Wedding DJ Packages</h2>
                          <p>How much does it cost to hire a Wedding DJ?</p>
                          <p>
                              Prices range between $1100 to $2000 and all our options can be easily personalised to help you create an extraordinary and memorable experience for everyone at your wedding.
                          </p>
                      </div>
                  </div>
                  <div className="z-20 flex justify-end w-full lg:overflow-y-scroll scrollbar-hide">
                      <div className="w-full lg:max-w-[55%] border-2 border-green-500">
                          <p>one</p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Entertainment;