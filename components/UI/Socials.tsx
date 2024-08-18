import {FaEnvelope, FaFacebookF, FaInstagram, FaPhone} from "react-icons/fa6";
import Link from "next/link";

const Socials = () => (
    <div className="flex flex-row gap-4 text-lg z-30">
        <Link href={"/"}><FaFacebookF /></Link>
        <Link href={"/"}><FaInstagram /></Link>
        <Link href={"/"}><FaPhone /></Link>
        <Link href={"/"}><FaEnvelope /></Link>
    </div>
);

export default Socials;