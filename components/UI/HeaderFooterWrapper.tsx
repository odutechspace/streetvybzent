'use client'
import {useEffect, useState} from "react";

import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Sidebar from "@/components/UI/Sidebar";

const HeaderFooterWrapper = (props: any) => {
    const [screenSize, setScreenSize] = useState<number | null>(null);
    const [scrollDisplacement, setScrollDisplacement] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);

    const sidebarHandler = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        const handleScroll = () => {
            setScrollDisplacement(window.scrollY);
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
        <>
            <div className="z-40">
                {screenSize !== null && scrollDisplacement !== null &&
                    <Header screenSize={screenSize} sidebarHandler={sidebarHandler} scrollDisp={scrollDisplacement}/>
                }
                {props.children}
                <Footer/>
            </div>
            <Sidebar isOpen={isOpen} sidebarHandler={sidebarHandler}/>
        </>

    );
}

export default HeaderFooterWrapper;