import PropertyCard from "@components/properties/PropertyCard";
import PropertyCardSkeleton from "@components/properties/PropertyCardSkeleton";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import { Link } from "react-router-dom";
import SectionHeader from "./common/SectionHeader";

function FeaturedProperties() {

    const LIMIT = 3;

    const { data, isLoading } = useQuery({
        queryKey: ['featured-properties'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .limit(LIMIT)
                .order('created_at', { ascending: false })

            if (error) throw error;
            return data;
        }
    })

    return (
        <section className="featured-properties-section py-5 md:py-10 bg-grey" id="featuredProperties">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="العقارات المميزة"
                    description="استكشف أفضل العقارات المميزة في السوق"
                >
                    <Link
                        to={'/properties'}
                        className="text-primary hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>عرض الكل</span>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                </SectionHeader>
                {/* Properties Grid */}
                <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                    {isLoading ? (
                        Array.from({ length: LIMIT }).map((_, index) => (<PropertyCardSkeleton key={index} />))
                    ) : (data?.map((property) => (<PropertyCard key={property.id} property={property} />)))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProperties;