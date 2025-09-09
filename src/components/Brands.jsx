export default function Brands({clients}) {  
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
                {clients && clients.length > 0 ? (
                  clients.map((client, j) => (
                    <div className="text-center" key={j}>
                      <img
                        src={client.logo}
                        alt={client.name || `brand-${j + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))
                ) : (
                  <p>No brands found</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}