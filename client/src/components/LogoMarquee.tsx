const fantasyBrands = [
  {
    initials: 'NX',
    name: 'NexaFlow',
    colorClass: 'logoColor1',
  },
  {
    initials: 'BR',
    name: 'BrightReach',
    colorClass: 'logoColor2',
  },
  {
    initials: 'VL',
    name: 'Vista Leads',
    colorClass: 'logoColor3',
  },
  {
    initials: 'PX',
    name: 'PixelGrowth',
    colorClass: 'logoColor4',
  },
  {
    initials: 'LM',
    name: 'LeadMint',
    colorClass: 'logoColor5',
  },
  {
    initials: 'SK',
    name: 'ScaleKit',
    colorClass: 'logoColor6',
  },
  {
    initials: 'TR',
    name: 'TrustRoute',
    colorClass: 'logoColor7',
  },
  {
    initials: 'AD',
    name: 'AdPilot',
    colorClass: 'logoColor8',
  },
];

export function LogoMarquee() {
  const brands = [...fantasyBrands, ...fantasyBrands];

  return (
    <section className="logoMarqueeSection" aria-label="Example brand styles">
      <div className="sectionContainer">
        <p className="logoMarqueeLabel">Built for brands that want better leads</p>
      </div>

      <div className="logoMarquee" aria-hidden="true">
        <div className="logoMarqueeTrack">
          {brands.map((brand, index) => (
            <div className={`fakeLogoCard ${brand.colorClass}`} key={`${brand.name}-${index}`}>
              <span>{brand.initials}</span>
              <strong>{brand.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}