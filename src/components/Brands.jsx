export default function Brands() {
    // JSON data inside the component
    const brandsData = [
        "/assets/img/brand/ccvte.jpg",
        "/assets/img/brand/glocal.jpg",
        "/assets/img/brand/iits-logo.jpg",
        "/assets/img/brand/jua-logo.jpg",
        "/assets/img/brand/osgu.jpg",
        "/assets/img/brand/swayam.jpg",
        "/assets/img/brand/svu.jpg",
    ];

    // number of times to repeat the logos row
    const repeatCount = 4;

    return (
        <div className="brand-section fix section-padding">
            <div className="container">
                <h5 className="brand-title wow fadeInUp" data-wow-delay=".3s">
                    Trusted By large and small businesses worldwide with{" "}
                    <b>Edtech Innovate - CRM</b>
                </h5>

                <div className="mycustom-marque style-border">
                    <div className="left-shape"></div>
                    <div className="right-shape"></div>

                    <div className="scrolling-wrap style-2">
                        {Array.from({ length: repeatCount }).map((_, i) => (
                            <div className="comm" key={i}>
                                {brandsData.map((src, j) => (
                                    <div className="text-center" key={j}>
                                        <img src={src} alt={`brand-${j + 1}`} loading='lazy' />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
