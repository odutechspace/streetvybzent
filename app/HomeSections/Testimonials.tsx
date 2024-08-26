import Image from "next/image";

const Testimonials = () => {
  return (
      <section className="xy-pad flex justify-center">
          <div className="max-width w-full">
              <div className="flex flex-col gap-20 items-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-[60%] text-center">More people trust Streetvybz with their events than any other company.</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 italic">
                      {
                          [...new Array(3).fill(null)].map((_, idx) =>
                              <div key={idx} className="flex flex-col gap-5">
                                  <p>
                                      “A dream to work with. Professional and quick off the mark to make it happen at short notice. Streetvybz will make it happen and will work with you to create a great experience for your group.”
                                  </p>
                                  <div className="flex flex-row gap-5 items-center">
                                      <div className="h-14 w-14 rounded-full overflow-hidden">
                                          <Image src="/home/testimonials/wedding-samp.jpg" alt="wedding-samp" width={100} height={100} className="w-auto h-full object-cover"/>
                                      </div>
                                      <div className="flex flex-col">
                                          <h2 className="font-medium">Wise Connections</h2>
                                          <p className="text-sm text-black/70">Corporate Event</p>
                                      </div>
                                  </div>
                              </div>
                          )
                      }
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Testimonials;

