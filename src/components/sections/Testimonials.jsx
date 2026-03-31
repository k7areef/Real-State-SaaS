import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./common/SectionHeader";
import { supabase } from "@utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {

    const LIMIT = 3;

    const { data, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .limit(LIMIT)
                .order('created_at', { ascending: false })

            if (error) throw error;
            return data;
        },
        refetchOnWindowFocus: false,
    })

    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="ماذا يقول عملاؤنا عن عقاري؟"
                    titleClassName="text-center"
                />
                {/* Testimonials */}
                <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {isLoading ? (
                        <>LOading,,,</>
                    ) : (
                        data?.map((testimonial, index) => (
                            <div key={index} className="testimonial-card bg-grey rounded-lg p-3 md:p-5 space-y-3">
                                <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-primary/30" />
                                <p>{testimonial.content}</p>
                                <div className="author-info flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                        <p className="text-sm opacity-60">{testimonial.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;