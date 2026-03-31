import statisticsData from "@data/statistics.json";

function Statistics() {
    return (
        <section className="statistics-section py-5 md:py-10" id="statistics">
            <div className="container">
                <div className="statistics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statisticsData.map((stat) => (
                        <div key={stat.id} className="statistic-card text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-primary">{stat.value}</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Statistics;