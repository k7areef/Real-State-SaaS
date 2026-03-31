import Background from "@assets/images/about-bg.jpg"
import Button from "@components/UI/Button";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutHeader() {

    const secRef = React.useRef(null);

    const handleExplore = React.useCallback(() => {
        if (secRef) {
            const secHeight = secRef.current?.offsetHeight || 0;
            window.scroll({ top: secHeight, behavior: "smooth" })
        }
    }, []);

    return (
        <section ref={secRef} className="about-header-section lg:aspect-2/1 relative" id="aboutHeader">
            {/* Background */}
            <div className="hero-section-background w-full h-full absolute top-0 left-0">
                <img src={Background} alt="Hero Section Background" className="w-full h-full object-cover" />
            </div>
            {/* Content Wrapper */}
            <div className="content-wrapper relative z-10 bg-secondary/30 h-full flex items-center py-20">
                <div className="container text-center text-white">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">من نحن</h1>
                    <p className="font-medium mt-5">نحن نعيد تعريف مفهوم التجربة العقارية الرقمية, حيث تلتفي التكنولوجيا المتطورة بالذوق الرفيع.</p>
                    <Button
                        onClick={handleExplore}
                        className="mt-5 flex items-center justify-center gap-2 mx-auto"
                    >
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="animate-bounce" />
                        <span>أستكشاف</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutHeader;