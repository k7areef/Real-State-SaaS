import Button from "@components/UI/Button";

function CTA() {
    return (
        <section className="cta-section py-5 md:py-10" id="cta">
            <div className="container">
                <div className="content-wrapper rounded-2xl bg-primary text-white px-5 md:px-10 py-10 md:py-20 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">هل تمتلك عقاراً وترغب في بيعه أو تأجيره؟</h2>
                    <p>انضم إلى منصة عقاري واحصل على عرض أساسي لعملائك</p>
                    <Button
                        to={'/auth/signup'}
                        state={{ role: "host" }}
                        variant="secondary"
                        className="mt-5 block md:w-1/4 mx-auto"
                    >
                        ابدأ الآن
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CTA;