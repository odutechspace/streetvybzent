'use client'

import { useEffect } from "react";

const InstagramEmbed = ({link = ""}: {link: string}) => {

    useEffect(() => {

        const script = document.createElement("script");

        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="flex justify-center min-h-[655px]">
            <blockquote
                cite="caribbean-connect-baba-dogo-jersey-edition"
                className="instagram-media"
                data-instgrm-permalink={link}
                data-instgrm-version="14" />
        </div>
    );
};

export default InstagramEmbed;
