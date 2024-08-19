'use client'
import {useEffect, useState} from "react";

import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const HeaderFooterWrapper = (props: any) => {
    const [screenSize, setScreenSize] = useState<number | null>(null);
    const [scrollDisplacement, setScrollDisplacement] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        const handleScroll = () => {
            setScrollDisplacement(window.scrollY);
            console.log("displacement: ", window.scrollY);
        }

        handleResize();
        handleScroll();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {screenSize !== null && scrollDisplacement !== null &&
                <Header screenSize={screenSize} scrollDisp={scrollDisplacement}/>
            }
            {props.children}
            <Footer/>
        </div>
    );
}

export default HeaderFooterWrapper;