import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";

const ScrollSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "3000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);
    return (
        <section className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section bg-red-100">
                        <h3>Section one</h3>
                    </div>
                    <div className="scroll-section bg-red-200">
                        <h3>Section 2</h3>
                    </div>
                    <div className="scroll-section bg-red-300">
                        <h3>Section 3</h3>
                    </div>
                    <div className="scroll-section bg-red-400">
                        <h3>Section 4</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollSection;
