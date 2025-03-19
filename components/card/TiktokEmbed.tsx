'use client'

import {useEffect, useState} from "react";
import {RotatingLines} from "react-loader-spinner";

const TiktokEmbed = ({ link = "" }: { link: string }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        script.onload = () => setLoading(false);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center h-fit min-h-[300px]">
            <blockquote
                className="tiktok-embed"
                cite={link}
                data-video-id={link.split("/").pop()}
                data-embed-from="embed_page"
                style={{ maxWidth: "605px", minWidth: "325px", maxHeight: "595px"}}
            >
                {loading && (
                    <div className="flex justify-center items-center w-full h-[300px] bg-zinc-100 rounded-md">
                        <RotatingLines />
                    </div>
                )}
                <div className="hidden">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Watch on TikTok
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

export default TiktokEmbed;


