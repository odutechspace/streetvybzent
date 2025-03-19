'use client'

import {useEffect, useState} from "react";
import {RotatingLines} from "react-loader-spinner";

const InstagramEmbed = ({link = ""}: {link: string}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => setLoading(false);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {
        console.log("ig-loading: ", loading);
    }, [loading]);

    return (
        <div className="flex justify-center h-fit min-h-[300px]">
            {
                loading &&
                <div className="flex justify-center items-center w-full h-[300px] bg-zinc-100 rounded-md ">
                    <RotatingLines strokeColor="#e3ad65" height="50" width="50"/>
                </div>
            }
            <blockquote
                cite="caribbean-connect-baba-dogo-jersey-edition"
                className="instagram-media"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
            />
        </div>
    );
};

export default InstagramEmbed;
