export interface TelescopeData {
  name: string;
  image?: string; // Optional image URL
  type: string; // e.g., Infrared, Optical, X-ray, Gamma-ray, Radio
  launchYear: number;
  country: string; // Primary country or collaboration lead
  agency: string; // NASA, ESA, ISRO, JAXA, etc.
  stage: 'Active' | 'Past' | 'Future'; // Operational, Retired/Decommissioned, Planned/Under Construction
  target: string; // e.g., Exoplanets, Galaxies, Cosmic Microwave Background, Stars, Sun
  keyFindings?: string[]; // Array of notable discoveries
  description: string;
}

// Placeholder image generation function (replace with actual image URLs or hosting)
const placeholderImage = (seed: string, width = 400, height = 225) => `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;


export const telescopeData: TelescopeData[] = [
  // Active Telescopes
  {
    name: "James Webb Space Telescope",
    image: "https://i.pinimg.com/736x/96/67/e2/9667e2c822fb169da63610ea243790b3.jpg",
    type: "Infrared",
    launchYear: 2021,
    country: "International",
    agency: "NASA/ESA/CSA",
    stage: "Active",
    target: "Early universe, exoplanets, star formation",
    keyFindings: [
      "Deepest infrared image of the universe",
      "Detailed atmospheric data of exoplanets",
      "Observations of early galaxy formation"
    ],
    description: "JWST is the largest, most powerful infrared space telescope ever built, successor to Hubble, observing the universe in unprecedented detail."
  },
  {
    name: "Hubble Space Telescope",
    image: "https://i.pinimg.com/736x/6f/81/19/6f8119668d76d8ecae2083225c35bfb8.jpg",
    type: "Optical/UV/Near-IR",
    launchYear: 1990,
    country: "International",
    agency: "NASA/ESA",
    stage: "Active",
    target: "Galaxies, stars, nebulae, exoplanets",
    keyFindings: [
      "Determined the age of the universe",
      "Discovered dark energy",
      "Imaged protoplanetary disks",
      "Hubble Deep Fields"
    ],
    description: "One of the most famous and productive scientific instruments ever built, Hubble has revolutionized astronomy."
  },
  {
    name: "Chandra X-ray Observatory",
    image: "https://i.pinimg.com/736x/1f/38/ba/1f38ba814070c7f8719f8aedc0afdc81.jpg",
    type: "X-ray",
    launchYear: 1999,
    country: "USA",
    agency: "NASA",
    stage: "Active",
    target: "Black holes, supernovae, galaxy clusters",
    keyFindings: [
      "Detailed images of supernova remnants",
      "Evidence for dark matter in galaxy collisions",
      "Studies of black hole environments"
    ],
    description: "Chandra detects X-ray emission from very hot regions of the universe, such as exploded stars, clusters of galaxies, and matter around black holes."
  },
   {
    name: "Transiting Exoplanet Survey Satellite (TESS)",
    image: "https://i.pinimg.com/736x/8d/f0/4e/8df04eac03fe8219d84fd492a0ff43a0.jpg",
    type: "Optical",
    launchYear: 2018,
    country: "USA",
    agency: "NASA",
    stage: "Active",
    target: "Exoplanets around nearby bright stars",
    keyFindings: [
      "Discovered thousands of exoplanet candidates",
      "Identified planets suitable for atmospheric study by JWST"
    ],
    description: "TESS surveys the entire sky to search for planets transiting nearby stars, focusing on finding Earth-sized and super-Earth planets."
  },
   {
    name: "Gaia",
    image: "https://i.pinimg.com/736x/cb/47/7a/cb477ae69b1945515f8f2e85630fd742.jpg",
    type: "Optical (Astrometry)",
    launchYear: 2013,
    country: "Europe",
    agency: "ESA",
    stage: "Active",
    target: "Milky Way structure and stellar positions",
    keyFindings: [
      "Created the most precise 3D map of the Milky Way",
      "Measured positions, distances, and motions of billions of stars"
    ],
    description: "Gaia is creating an extraordinarily precise three-dimensional map of about two billion objects throughout the Milky Way and beyond."
  },
  {
    name: "Fermi Gamma-ray Space Telescope",
    image: "https://i.pinimg.com/736x/ac/36/0b/ac360ba7fbce565326bad844c838b989.jpg",
    type: "Gamma-ray",
    launchYear: 2008,
    country: "USA",
    agency: "NASA",
    stage: "Active",
    target: "Gamma-ray sources like black holes, pulsars, and gamma-ray bursts",
    keyFindings: [
      "Cataloged thousands of gamma-ray sources",
      "Studied gamma-ray bursts and active galactic nuclei",
      "Contributed to dark matter research"
    ],
    description: "Fermi explores the high-energy universe by detecting gamma rays from distant cosmic sources, helping to understand black holes and exotic physics."
  },
  {
    name: "NICER (Neutron star Interior Composition Explorer)",
    image: "https://i.pinimg.com/736x/1c/ae/ab/1caeab6302096f00b786a040d79687c9.jpg",
    type: "X-ray",
    launchYear: 2017,
    country: "USA",
    agency: "NASA",
    stage: "Active",
    target: "Neutron stars and pulsars",
    keyFindings: [
      "Measured sizes and masses of neutron stars",
      "Studied pulsar timing for potential navigation systems"
    ],
    description: "NICER is an X-ray telescope mounted on the ISS, focused on the structure and behavior of neutron stars through precise timing observations."
  },
  {
    name: "CHEOPS (Characterizing Exoplanets Satellite)",
    image: "https://i.pinimg.com/736x/43/6d/af/436daf0b8ae682f3e840e699fd268f56.jpg",
    type: "Optical",
    launchYear: 2019,
    country: "Europe",
    agency: "ESA",
    stage: "Active",
    target: "Exoplanets orbiting bright stars",
    keyFindings: [
      "Accurate size measurements of known exoplanets",
      "Helped confirm planetary densities and compositions"
    ],
    description: "CHEOPS is dedicated to characterizing known exoplanets by measuring their transits with high precision, refining data on their size and density."
  },
  {
    name: "eROSITA (extended ROentgen Survey with an Imaging Telescope Array)",
    image: "https://i.pinimg.com/736x/95/27/b8/9527b889e1fc1d5a1b950a5d19ab41d7.jpg",
    type: "X-ray",
    launchYear: 2019,
    country: "Germany/Russia",
    agency: "DLR/Roscosmos",
    stage: "Active",
    target: "X-ray sources including galaxy clusters and black holes",
    keyFindings: [
      "Produced largest X-ray map of the sky",
      "Detected millions of new X-ray sources"
    ],
    description: "eROSITA is performing an all-sky survey in X-rays to study the large-scale structure of the universe and the growth of black holes and galaxy clusters."
  },
  {
    name: "Hinode",
    image: "https://i.pinimg.com/736x/db/77/92/db7792eaffdd6432cc76a48fe6acdf04.jpg",
    type: "Optical/X-ray/UV",
    launchYear: 2006,
    country: "Japan",
    agency: "JAXA/NASA/ESA",
    stage: "Active",
    target: "Sun's magnetic fields, solar flares, and corona",
    keyFindings: [
      "Advanced understanding of solar magnetic activity",
      "Observed fine-scale solar features and coronal heating mechanisms"
    ],
    description: "Hinode studies the Sun’s magnetic fields and their role in powering solar flares and heating the corona, contributing to space weather understanding."
  },  

  // Past Telescopes
  {
    name: "Spitzer Space Telescope",
    image: "https://i.pinimg.com/736x/4a/18/1a/4a181a9ec1208a363f843a30dd1417bc.jpg",
    type: "Infrared",
    launchYear: 2003,
    country: "USA",
    agency: "NASA",
    stage: "Past", // Decommissioned in 2020
    target: "Star formation, exoplanets, distant galaxies",
    keyFindings: [
      "Detected light from exoplanets",
      "Studied dusty star-forming regions",
      "Observed some of the most distant galaxies"
    ],
    description: "One of NASA's Great Observatories, Spitzer studied the universe in infrared light before being decommissioned in 2020."
  },
  {
    name: "Kepler Space Telescope",
    image: "https://i.pinimg.com/736x/a7/88/8b/a7888be92c0470d06a517b6e4f2f3474.jpg",
    type: "Optical",
    launchYear: 2009,
    country: "USA",
    agency: "NASA",
    stage: "Past", // Decommissioned in 2018
    target: "Exoplanets (specifically Earth-like)",
    keyFindings: [
      "Discovered thousands of exoplanets",
      "Showed that planets are common in the galaxy",
      "Found many multi-planet systems"
    ],
    description: "Kepler's primary mission was to find Earth-sized planets in the habitable zones of their stars. It vastly increased the number of known exoplanets."
  },
   {
    name: "Herschel Space Observatory",
    image: "https://i.pinimg.com/736x/07/83/dc/0783dc175944f6cef89117dbe38f1eab.jpg",
    type: "Far-Infrared/Submillimetre",
    launchYear: 2009,
    country: "Europe",
    agency: "ESA",
    stage: "Past", // Mission ended in 2013
    target: "Star formation, interstellar medium, galaxy evolution",
    keyFindings: [
      "Detailed observations of cold dust and gas",
      "Insights into the early stages of star birth",
      "Mapped water distribution in space"
    ],
    description: "Herschel had the largest mirror ever deployed in space at the time of its launch, studying the cool and dusty universe."
  },
  {
    name: "Compton Gamma Ray Observatory (CGRO)",
    image: "https://i.pinimg.com/736x/8b/8a/6d/8b8a6d66295e4c7a8f7955a45a62b537.jpg",
    type: "Gamma-ray",
    launchYear: 1991,
    country: "USA",
    agency: "NASA",
    stage: "Past", // Deorbited in 2000
    target: "Gamma-ray bursts, pulsars, black holes",
    keyFindings: [
      "Mapped the gamma-ray sky",
      "Discovered hundreds of gamma-ray sources",
      "Helped confirm the isotropic distribution of gamma-ray bursts"
    ],
    description: "CGRO was one of NASA’s Great Observatories, studying the most energetic phenomena in the universe until it was safely deorbited in 2000."
  },
  {
    name: "Infrared Astronomical Satellite (IRAS)",
    image: "https://i.pinimg.com/736x/fa/37/dd/fa37dddedd21a0b2e7b8475a05a5888a.jpg",
    type: "Infrared",
    launchYear: 1983,
    country: "USA/UK/Netherlands",
    agency: "NASA/SERC/NIVR",
    stage: "Past", // Mission ended in 1983
    target: "Infrared sources, star-forming regions, galaxies",
    keyFindings: [
      "Discovered over 350,000 infrared sources",
      "Revealed dust disks around stars",
      "Provided first-ever all-sky infrared survey"
    ],
    description: "IRAS was the first space telescope to perform a survey of the entire sky at infrared wavelengths, revolutionizing our view of dusty and cold celestial objects."
  },
  {
    name: "WISE (Wide-field Infrared Survey Explorer)",
    image: "https://i.pinimg.com/736x/b7/1d/57/b71d5724238be2fb2a82d3dfc48b4eed.jpg",
    type: "Infrared",
    launchYear: 2009,
    country: "USA",
    agency: "NASA",
    stage: "Past", // Mission ended in 2011 (reactivated later as NEOWISE)
    target: "Asteroids, brown dwarfs, distant galaxies",
    keyFindings: [
      "Discovered thousands of minor planets and brown dwarfs",
      "Produced an all-sky infrared map",
      "Found Earth-threatening asteroids"
    ],
    description: "WISE conducted an infrared survey of the sky, discovering cool stars, asteroids, and distant galaxies. It was later reactivated as NEOWISE for asteroid tracking."
  },
  {
    name: "International Ultraviolet Explorer (IUE)",
    image: "https://i.pinimg.com/736x/3f/12/38/3f1238874e4deccf438271ba618b43bc.jpg",
    type: "Ultraviolet",
    launchYear: 1978,
    country: "International",
    agency: "NASA/ESA/UK",
    stage: "Past", // Decommissioned in 1996
    target: "Stars, galaxies, comets",
    keyFindings: [
      "Studied the atmospheres of hot stars",
      "Observed comets and active galactic nuclei",
      "Provided the longest continuous dataset in UV astronomy"
    ],
    description: "IUE was a pioneering ultraviolet space telescope that operated for over 18 years, contributing immensely to stellar and extragalactic science."
  },
  {
    name: "Planck Space Observatory",
    image: "https://i.pinimg.com/736x/f1/fb/10/f1fb108e46bd0861bd339084c317fd96.jpg",
    type: "Microwave/Submillimetre",
    launchYear: 2009,
    country: "Europe",
    agency: "ESA",
    stage: "Past", // Mission ended in 2013
    target: "Cosmic Microwave Background (CMB)",
    keyFindings: [
      "Created the most detailed map of the CMB",
      "Refined parameters of the Big Bang model",
      "Supported the standard model of cosmology"
    ],
    description: "Planck provided the most accurate measurements of the cosmic microwave background radiation, helping define the age, content, and structure of the universe."
  },  

  // Future Telescopes
  {
    name: "Nancy Grace Roman Space Telescope",
    image: "https://i.pinimg.com/736x/d0/f3/40/d0f340e6a8a768de44e92386b56ff827.jpg",
    type: "Infrared",
    launchYear: 2027, // Projected
    country: "USA",
    agency: "NASA",
    stage: "Future",
    target: "Dark energy, exoplanets, large-scale structure",
    keyFindings: [],
    description: "Formerly WFIRST, Roman will have a wide field of view, 100 times larger than Hubble's, to study dark energy and hunt for exoplanets using microlensing."
  },
  {
    name: "PLATO (PLAnetary Transits and Oscillations of stars)",
    image: "https://i.pinimg.com/736x/8f/31/8b/8f318b6f91411f0d9a552e9838e9d0af.jpg",
    type: "Optical",
    launchYear: 2026, // Projected
    country: "Europe",
    agency: "ESA",
    stage: "Future",
    target: "Earth-like exoplanets in habitable zones, stellar seismology",
    keyFindings: [],
    description: "PLATO aims to find and study a large number of extrasolar planetary systems, with emphasis on the properties of terrestrial planets in the habitable zone around solar-like stars."
  },
  {
    name: "LiteBIRD (Lite satellite for the study of B-mode polarization and Inflation)",
    image: "https://i.pinimg.com/736x/c1/4c/af/c14cafb288452fef468f3cded6a83d12.jpg",
    type: "Microwave (CMB)",
    launchYear: 2030, // Approximate target
    country: "Japan (International Collaboration)",
    agency: "JAXA (led)",
    stage: "Future",
    target: "Cosmic Microwave Background polarization, Inflation",
    keyFindings: [],
    description: "LiteBIRD aims to detect the signature of primordial gravitational waves (B-modes) in the Cosmic Microwave Background, providing evidence for cosmic inflation."
  },
  {
    name: "LUVOIR (Large UV/Optical/IR Surveyor)",
    image: "https://i.pinimg.com/736x/d3/95/ac/d395ace8c2e1c0ad56416ef35b8ac2a4.jpg",
    type: "Ultraviolet/Optical/Infrared",
    launchYear: 2039, // Conceptual; subject to change
    country: "USA",
    agency: "NASA",
    stage: "Future",
    target: "Exoplanets, galaxy formation, cosmic evolution",
    keyFindings: [],
    description: "LUVOIR is a concept for a large, multipurpose observatory that would vastly improve upon Hubble and Webb, enabling direct imaging of Earth-like exoplanets and deep-field cosmic surveys."
  },
  {
    name: "HabEx (Habitable Exoplanet Observatory)",
    image: "https://i.pinimg.com/736x/9c/bb/95/9cbb95b8420280afcfe4d0e84bc1fe2e.jpg",
    type: "Optical/UV/Infrared",
    launchYear: 2035, // Conceptual; subject to change
    country: "USA",
    agency: "NASA",
    stage: "Future",
    target: "Habitable exoplanets, biosignatures, planetary atmospheres",
    keyFindings: [],
    description: "HabEx is designed to directly image Earth-like exoplanets and analyze their atmospheres for signs of life, using advanced coronagraph and starshade technology."
  },
  {
    name: "Athena (Advanced Telescope for High ENergy Astrophysics)",
    image: "https://i.pinimg.com/736x/a2/01/ae/a201ae6eb4021e13d33989abca7b4451.jpg",
    type: "X-ray",
    launchYear: 2035, // Projected
    country: "Europe",
    agency: "ESA",
    stage: "Future",
    target: "Black holes, galaxy evolution, hot gas in the universe",
    keyFindings: [],
    description: "Athena will be the next-generation X-ray observatory, studying the hottest and most energetic phenomena in the universe, including galaxy cluster formation and black hole growth."
  },
  {
    name: "ARIEL (Atmospheric Remote-sensing Infrared Exoplanet Large-survey)",
    image: "https://i.pinimg.com/736x/f6/52/a7/f652a72331dc826980518dca83c978de.jpg",
    type: "Infrared",
    launchYear: 2029, // Projected
    country: "Europe",
    agency: "ESA",
    stage: "Future",
    target: "Exoplanet atmospheres",
    keyFindings: [],
    description: "ARIEL will observe the atmospheres of hundreds of exoplanets to study their chemical composition, formation environments, and climate systems."
  },
  {
    name: "TOLIMAN (Telescope for Orbit Locus Interferometric Monitoring of our Astronomical Neighbourhood)",
    image: "https://i.pinimg.com/736x/c6/0f/fc/c60ffcc2e6a374aa8e8ff5d50358217f.jpg",
    type: "Optical",
    launchYear: 2027, // Approximate
    country: "Australia",
    agency: "Breakthrough Initiatives/University of Sydney",
    stage: "Future",
    target: "Exoplanets around Alpha Centauri",
    keyFindings: [],
    description: "TOLIMAN is a small, specialized mission to detect Earth-sized exoplanets in the Alpha Centauri system using precision astrometry."
  }
  
];



