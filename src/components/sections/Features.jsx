import features from "@data/features.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faUsers, faBuilding, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const iconsMaper = {
    "chart-line": faChartLine,
    "users": faUsers,
    "building": faBuilding,
    "shield-alt": faShieldAlt,
}

function Features() {
    return (
        <section className="features-section py-5 md:py-10" id="features">
            <div className="container">
                <div className="features-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {
                        features.map((feature) => (
                            <div key={feature.id} className="feature-card bg-grey rounded-lg p-3 md:p-5">
                                <div className="card-header flex items-center gap-2 mb-3">
                                    <FontAwesomeIcon icon={iconsMaper[feature.icon]} className="text-primary text-xl" />
                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features;