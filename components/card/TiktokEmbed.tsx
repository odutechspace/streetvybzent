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
                        <RotatingLines strokeColor="#e3ad65" height="50" width="50" />
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
/*const func = () => {
    return (
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@streetvybzent/video/7483158449996549381"
        data-video-id="7483158449996549381"
        data-embed-from="embed_page"
        style="max-width:605px; min-width:325px;">
         <section> <a target="_blank" title="@streetvybzent" href="https://www.tiktok.com/@streetvybzent?refer=embed">@streetvybzent</a> <p>Get ready to groove to the Best Of Throwback Dancehall/Riddims with some element of Newskool Dancehall,Onedrop,Ragga,Onedrop & Soca tunes straight from the Caribbean islands during our 1st edition of CARIBBEAN CONNECT this year(7th series) on 📆29/03/2025. 📍:Spectrum Business Park,Baba Dogo(K.O Bar) Grab your tickets,link is on our bio <a title="caribbeanconnectke" target="_blank" href="https://www.tiktok.com/tag/caribbeanconnectke?refer=embed">#CaribbeanConnectKe</a> <a title="caribbeanconnect" target="_blank" href="https://www.tiktok.com/tag/caribbeanconnect?refer=embed">#CaribbeanConnect</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="kenyantiktok🇰🇪" target="_blank" href="https://www.tiktok.com/tag/kenyantiktok%F0%9F%87%B0%F0%9F%87%AA?refer=embed">#kenyantiktok🇰🇪</a> </p> <a target="_blank" title="♬ original sound - Street Vybz Ent & Events" href="https://www.tiktok.com/music/original-sound-7483158480372009783?refer=embed">♬ original sound - Street Vybz Ent & Events</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    );
}*/

