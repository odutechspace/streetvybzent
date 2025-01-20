import {FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaXTwitter} from "react-icons/fa6";
import Link from "next/link";

import {siteConfig} from "@/config/site";

const SocialsShare = () => (
    <div className="flex flex-row gap-4 text-lg z-30 social-icon-cont">
        <Link href={siteConfig?.links?.facebook} target={"_blank"} className="event-share-icons"><FaFacebookF /></Link>
        <Link href={siteConfig?.links?.instagram} target={"_blank"} className="event-share-icons"><FaInstagram /></Link>
        <Link href={`tel:${siteConfig?.links?.twitter}`} target={"_blank"} className="event-share-icons"><FaXTwitter /></Link>
        <Link href={`tel:${siteConfig?.links?.tiktok}`} target={"_blank"} className="event-share-icons"><FaTiktok /></Link>
        <Link href={`mailto:${siteConfig?.links?.email}`} target={"_blank"} className="event-share-icons"><FaEnvelope /></Link>
    </div>
);

export default SocialsShare;