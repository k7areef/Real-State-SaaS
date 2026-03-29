import FeaturedProperties from "@components/sections/FeaturedProperties";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <Features />
            <FeaturedProperties />
            <Testimonials />
        </div>
    )
}

export default HomePage;