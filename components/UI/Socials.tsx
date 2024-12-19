import {FaFacebookF, FaInstagram, FaPhone, FaXTwitter} from "react-icons/fa6";
import Link from "next/link";

import {siteConfig} from "@/config/site";

const {links: socials} = siteConfig;
const Socials = () => (
    <div className="flex flex-row gap-4 text-lg z-30 social-icon-cont">
        <Link href={socials?.facebook} target={"_blank"}><FaFacebookF /></Link>
        <Link href={socials?.instagram} target={"_blank"}><FaInstagram /></Link>
        <Link href={`tel:${socials?.phoneNo}`} target={"_blank"}><FaPhone /></Link>
        <Link href={socials?.twitter} target={"_blank"}><FaXTwitter /></Link>
    </div>
);

export default Socials;