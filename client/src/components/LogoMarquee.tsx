const focusAreas = [
  { initials: 'SEO', name: 'Local Search', colorClass: 'logoColor1' },
  { initials: 'GEO', name: 'AI Search', colorClass: 'logoColor2' },
  { initials: 'LP', name: 'Landing Pages', colorClass: 'logoColor3' },
  { initials: 'WEB', name: 'Business Websites', colorClass: 'logoColor4' },
  { initials: 'iOS', name: 'Mobile Apps', colorClass: 'logoColor5' },
  { initials: 'CRO', name: 'Lead Conversion', colorClass: 'logoColor6' },
  { initials: 'FL', name: 'Florida Markets', colorClass: 'logoColor7' },
  { initials: 'DEV', name: 'React + SwiftUI', colorClass: 'logoColor8' },
];

export function LogoMarquee() {
  const items = [...focusAreas, ...focusAreas];

  return (
    <section className="logoMarqueeSection" aria-label="Core services and specialties">
      <div className="sectionContainer">
        <p className="logoMarqueeLabel">One strategy from search visibility to conversion</p>
      </div>

      <div className="logoMarquee" aria-hidden="true">
        <div className="logoMarqueeTrack">
          {items.map((item, index) => (
            <div className={`fakeLogoCard ${item.colorClass}`} key={`${item.name}-${index}`}>
              <span>{item.initials}</span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
