import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero-heading', {
            opacity: 1,
            delay: 1.5,
        })
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 1.5
        })
    }, [])

    return (
        <section className='container mx-auto py-[60px] bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id="hero-heading" className='hero-title'>iPhone 15 Pro</p>
                <div className="md:w-5/6 w-3/4">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-50 mt-5">
                <a href="#highlights" className="btn">Buy Now</a>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;