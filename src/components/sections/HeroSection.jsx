import Button from "@components/UI/Button";
import { faHome, faLocationDot, faMoneyBill, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
    return (
        <section className="hero-section-section lg:aspect-2/1 relative" id="heroSection">
            {/* Background */}
            <div className="hero-section-background w-full h-full absolute top-0 left-0">
                <img src="/assets/images/hero-bg.webp" alt="Hero Section Background" className="w-full h-full object-cover" />
            </div>
            {/* Content Wrapper */}
            <div className="content-wrapper relative z-10 bg-secondary/30 h-full flex items-center py-10">
                <div className="container">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white text-center">عقارات أحلامك في متناول يدك</h1>
                    <form className="rounded-lg bg-grey/60 backdrop-blur-md p-4 mt-5 md:mt-10 lg:flex items-end max-lg:grid max-lg:md:grid-cols-2 gap-5 md:gap-7.5">
                        {/* Property Location */}
                        <div className="property-location flex-1">
                            <label htmlFor="property_location">الموقع</label>
                            <div className="input-gorup relative">
                                <input
                                    required
                                    type="text"
                                    id="property_location"
                                    name="property_location"
                                    placeholder="أدخل موقع العقار"
                                    className="p-3 ps-10 bg-white rounded-md block mt-3 w-full border border-transparent transition-colors focus:border-primary"
                                />
                                <FontAwesomeIcon icon={faLocationDot} className="absolute top-1/2 right-3 -translate-y-1/2 z-10 text-primary text-lg" />
                            </div>
                        </div>
                        {/* Property Type */}
                        <div className="property-type flex-1">
                            <label htmlFor="property_type">نوع العقار</label>
                            <div className="input-group relative">
                                <input
                                    required
                                    type="text"
                                    id="property_type"
                                    name="property_type"
                                    placeholder="أدخل نوع العقار"
                                    className="p-3 ps-10 bg-white rounded-md block mt-3 w-full border border-transparent transition-colors focus:border-primary"
                                />
                                <FontAwesomeIcon icon={faHome} className="absolute top-1/2 right-3 -translate-y-1/2 z-10 text-primary text-lg" />
                            </div>
                        </div>
                        {/* Price Range */}
                        <div className="price-range flex-1">
                            <label htmlFor="price_range">السعر</label>
                            <div className="input-group relative">
                                <input
                                    required
                                    type="text"
                                    id="price_range"
                                    name="price_range"
                                    placeholder="أدخل السعر"
                                    className="p-3 ps-10 bg-white rounded-md block mt-3 w-full border border-transparent transition-colors focus:border-primary"
                                />
                                <FontAwesomeIcon icon={faMoneyBill} className="absolute top-1/2 right-3 -translate-y-1/2 z-10 text-primary text-lg" />
                            </div>
                        </div>
                        {/* Submit Button */}
                        <Button
                            type="submit"
                            to={`/properties`}
                            className="flex items-center gap-2 lg:w-fit"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                            <span>أستكشف العقارات</span>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;