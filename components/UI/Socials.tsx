import {FaEnvelope, FaFacebookF, FaInstagram, FaPhone} from "react-icons/fa6";
import Link from "next/link";

import {siteConfig} from "@/config/site";

const Socials = () => (
    <div className="flex flex-row gap-4 text-lg z-30 social-icon-cont">
        <Link href={siteConfig?.links?.facebook} target={"_blank"}><FaFacebookF /></Link>
        <Link href={siteConfig?.links?.instagram} target={"_blank"}><FaInstagram /></Link>
        <Link href={`tel:${siteConfig?.links?.phoneNo}`} target={"_blank"}><FaPhone /></Link>
        <Link href={`mailto:${siteConfig?.links?.email}`} target={"_blank"}><FaEnvelope /></Link>
    </div>
);

export default Socials;