import "./Footer.css";
import {FaEnvelope, FaFacebookF, FaInstagram, FaPhone} from "react-icons/fa6";
import {FaMixcloud} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
      <footer className="flex  bg-footer_bg ">
          <div className="w-full flex flex-col items-center">
              <div className="xy-pad max-width flex flex-row justify-between gap-6 flex-wrap md:flex-nowrap text-primary_text">
                  <div className="h-[200px]">
                      <Image src="/logo/logo-without-bg.png" alt="streetvybz logo" width={500} height={500} className="h-full w-auto"/>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 flex-wrap xl:flex-nowrap justify-between w-full max-w-[65%]">
                      <div className="flex flex-col gap-2">
                          <h2>QUICK ACCESS</h2>
                          <ul className="flex flex-col gap-0.5 list-disc pl-4">
                              <li><Link href={"/"}>Home</Link></li>
                              <li><Link href={"/"}>About Us</Link></li>
                              <li><Link href={"/"}>Entertainment</Link></li>
                              <li><Link href={"/"}>Corporate Events</Link></li>
                              <li><Link href={"/"}>Lighting and Effects</Link></li>
                              <li><Link href={"/"}>Our Events</Link></li>
                          </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                          <h2>CONTACT</h2>
                          <div className="flex flex-col gap-0.5">
                              <Link href={"/"}>1300 736 233</Link>
                              <Link href={"/"}>info@gmeventgroup.com.au</Link>
                              <Link href={"/"}>Send us a Text Message</Link>
                          </div>
                      </div>
                      <div className="flex flex-col gap-2">
                          <h2>SOCIAL MEDIA</h2>
                          <div className="flex flex-row gap-4 text-xl">
                              <div className="flex flex-row gap-4 text-[20px]">
                                  <Link href={"/"}><FaFacebookF /></Link>
                                  <Link href={"/"}><FaInstagram /></Link>
                                  <Link href={"/"}><FaMixcloud /></Link>
                                  <Link href={"/"}><FaPhone /></Link>
                                  <Link href={"/"}><FaEnvelope /></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="x-pad flex justify-center w-full border-t-1 border-t-gray_primary/30 py-11">
                  <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-1 text-primary_text font-semibold text-medium">
                          <Link href={"/"} className="text-medium">Privacy Policy</Link>
                          <p className="text-medium">|</p>
                          <Link href={"/"} className="text-medium">Website Terms</Link>
                      </div>
                      <p className="text-medium text-gray_primary">© {new Date(Date.now()).getFullYear()} Streetvybz Entertainment.</p>
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer;