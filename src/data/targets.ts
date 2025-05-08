// src/data/targets.ts
import type { LucideIcon } from 'lucide-react';
import { Target, Orbit, Atom, Sparkles, Star, Radio, Wind, Sun, Binary } from 'lucide-react';

export interface TargetData {
  name: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  imageUrl: string; // Renamed from imageSeed to reflect direct URL usage
  aiHint: string; // For real image search
  keyDiscoveries: string[];
  relevantTelescopes: string[]; // Names of telescopes that observe this type of target
}

export const targetData: TargetData[] = [
  {
    name: 'Exoplanets',
    icon: Orbit,
    shortDescription: 'Planets orbiting stars outside our solar system.',
    longDescription: 'Exoplanets are worlds beyond our own solar system. Space telescopes like Kepler, TESS, and JWST have revolutionized their discovery and characterization. By observing the slight dimming of starlight as a planet passes in front (transit method) or by analyzing the spectrum of light passing through a planet\'s atmosphere, scientists can determine their size, mass, composition, and even search for signs of habitability or life (biosignatures).',
    imageUrl: 'https://i.pinimg.com/736x/ac/9e/34/ac9e34fbb4bc72af3e0c70999a1c13d9.jpg',
    aiHint: 'exoplanet discovery artist conception james webb',
    keyDiscoveries: [
      'Thousands of exoplanets discovered, revealing planetary system diversity.',
      'Detection of water vapor and other molecules in exoplanet atmospheres.',
      'Identification of potentially rocky worlds in habitable zones.',
      'First direct images of exoplanets.',
    ],
    relevantTelescopes: [
        'Kepler Space Telescope',
        'Transiting Exoplanet Survey Satellite (TESS)',
        'Hubble Space Telescope',
        'Spitzer Space Telescope',
        'James Webb Space Telescope',
        'CHEOPS (Characterizing Exoplanets Satellite)',
        'ARIEL (Future)',
        'PLATO (Future)',
        'HabEx (Future)', // Concept
        'LUVOIR (Future)' // Concept
    ],
  },
  {
    name: 'Galaxies',
    icon: Atom, // Using Atom as a placeholder for galaxy shape
    shortDescription: 'Vast systems of stars, gas, dust, and dark matter.',
    longDescription: 'Galaxies are immense islands of stars, gas, dust, and mysterious dark matter, held together by gravity. Telescopes like Hubble and JWST allow us to see galaxies across cosmic time, from the chaotic mergers of early galaxies to the majestic spirals nearby. Studying their structure, evolution, star formation rates, and the supermassive black holes lurking at their centers helps unravel the history and large-scale structure of the universe.',
    imageUrl: 'https://i.pinimg.com/736x/99/7e/21/997e21deea0d318b650daeccf09026e6.jpg',
    aiHint: 'andromeda galaxy deep space hubble',
    keyDiscoveries: [
      'Discovery of the accelerating expansion of the universe (using supernovae in distant galaxies).',
      'Evidence for supermassive black holes at the center of most large galaxies.',
      'Observation of galaxy mergers and evolution over billions of years.',
      'Mapping the distribution of dark matter within galaxy clusters.',
      'Identification of the earliest known galaxies from the dawn of the universe (JWST).',
    ],
    relevantTelescopes: [
        'Hubble Space Telescope',
        'James Webb Space Telescope',
        'Spitzer Space Telescope',
        'Chandra X-ray Observatory',
        'Herschel Space Observatory',
        // 'Euclid (Future)', // Not in telescopeData yet
        'Nancy Grace Roman Space Telescope', // Future
        'LUVOIR (Future)' // Concept
    ],
  },
  {
    name: 'Black Holes',
    icon: Binary, // Using Binary as a placeholder icon
    shortDescription: 'Regions of spacetime where gravity is so strong nothing can escape.',
    longDescription: 'Black holes are objects with gravity so intense that not even light can escape once it crosses the event horizon. While invisible themselves, space telescopes observe their presence indirectly by studying their effects on nearby stars and gas. X-ray telescopes like Chandra are crucial for observing the hot accretion disks of matter spiraling into black holes, while telescopes like Hubble can track the rapid motion of stars orbiting galactic centers, inferring the mass of the central supermassive black hole.',
    imageUrl: 'https://i.pinimg.com/736x/64/7a/18/647a186b79cf7b11134e55e2a3989c13.jpg',
    aiHint: 'black hole event horizon telescope simulation M87',
    keyDiscoveries: [
      'Confirmation of supermassive black holes at galactic centers (e.g., Sagittarius A* in the Milky Way).',
      'Observation of jets powered by accreting black holes.',
      'Detailed studies of X-ray binaries containing stellar-mass black holes.',
      'Linking black hole growth with galaxy evolution.',
    ],
    relevantTelescopes: [
        'Chandra X-ray Observatory',
        'Hubble Space Telescope',
        'Fermi Gamma-ray Space Telescope',
        // 'NuSTAR', // Not in telescopeData yet
        // 'XMM-Newton', // Not in telescopeData yet
        'eROSITA (extended ROentgen Survey with an Imaging Telescope Array)',
        'Athena (Future)' // Future
    ],
  },
  {
    name: 'Solar System',
    icon: Sun,
    shortDescription: 'Our home system, including planets, moons, asteroids, and comets.',
    longDescription: 'While often studied by dedicated probes, space telescopes also provide invaluable insights into our own Solar System. They offer long-term monitoring capabilities and unique perspectives not possible from Earth or close flybys. Hubble has tracked storms on Jupiter and Saturn, JWST studies the atmospheres of icy moons and faint objects in the Kuiper Belt, and telescopes like NEOWISE hunt for potentially hazardous asteroids.',
    imageUrl: 'https://i.pinimg.com/736x/0a/fd/74/0afd74d5ed31747ba3cd827353b600e3.jpg',
    aiHint: 'saturn rings cassini voyager detailed',
    keyDiscoveries: [
      'Detailed imaging of planetary atmospheres and weather patterns.',
      'Discovery of new moons and rings around planets.',
      'Characterization of asteroids and comets, including near-Earth objects.',
      'Observation of auroras on Jupiter and Saturn.',
      'Study of Kuiper Belt Objects beyond Neptune.',
    ],
    relevantTelescopes: [
        'Hubble Space Telescope',
        'James Webb Space Telescope',
        'Spitzer Space Telescope',
        'WISE (Wide-field Infrared Survey Explorer)', // NEOWISE is the reactivated phase
        'Kepler Space Telescope' // K2 mission phase
    ],
  },
  {
    name: 'Nebulae',
    icon: Wind, // Using Wind as a placeholder for gas clouds
    shortDescription: 'Interstellar clouds of gas and dust, often sites of star formation or stellar death.',
    longDescription: 'Nebulae are breathtaking clouds of gas and dust drifting between the stars. Emission nebulae glow brightly as gas is ionized by nearby hot stars (e.g., Orion Nebula). Reflection nebulae scatter starlight, appearing blue. Dark nebulae are dense clouds obscuring background light. Planetary nebulae are the beautiful, ejected outer layers of dying low-mass stars. Supernova remnants are the expanding shells from massive stellar explosions. Infrared telescopes like Spitzer and JWST excel at peering through the dust to reveal newborn stars hidden within.',
    imageUrl: 'https://i.pinimg.com/736x/f8/16/86/f81686206ce26e3adc7ea8de9b938e69.jpg',
    aiHint: 'pillars creation hubble eagle nebula',
    keyDiscoveries: [
      'Revealing intricate structures shaped by stellar winds and radiation.',
      'Observing embedded protostars and protoplanetary disks within star-forming regions.',
      'Mapping the chemical composition and physical conditions within the interstellar medium.',
      'Understanding the lifecycle of stars through planetary nebulae and supernova remnants.',
    ],
    relevantTelescopes: [
        'Hubble Space Telescope',
        'James Webb Space Telescope',
        'Spitzer Space Telescope',
        'Herschel Space Observatory',
        'Chandra X-ray Observatory' // For supernova remnants
    ],
  },
  {
    name: 'Stars & Stellar Evolution',
    icon: Star,
    shortDescription: 'Observing stars from their birth in nebulae to their final explosive or quiet demise.',
    longDescription: 'Stars are the fundamental building blocks of galaxies. Space telescopes allow astronomers to study their entire life cycle: from formation within dense molecular clouds, through their long main-sequence phase burning hydrogen, to their final stages. Low-mass stars like our Sun end as white dwarfs, while massive stars explode as supernovae, leaving behind neutron stars or black holes. Telescopes measure stellar properties like temperature, mass, luminosity, and chemical composition across different wavelengths.',
    imageUrl: 'https://i.pinimg.com/736x/fc/0e/75/fc0e7553bc2d44ca20eda1997f2ccca2.jpg',
    aiHint: 'star cluster stellar nursery tarantula nebula',
    keyDiscoveries: [
      'Precise measurements of stellar distances and motions (Gaia).',
      'Understanding the processes of star formation and protoplanetary disk evolution.',
      'Detailed studies of stellar atmospheres and magnetic activity.',
      'Observation of supernova explosions and their remnants.',
      'Characterization of white dwarfs, neutron stars, and pulsars.',
    ],
    relevantTelescopes: [
        'Hubble Space Telescope',
        'Gaia',
        'James Webb Space Telescope',
        'Spitzer Space Telescope',
        'Chandra X-ray Observatory',
        'Kepler Space Telescope', // Stellar seismology
        'Transiting Exoplanet Survey Satellite (TESS)' // Stellar activity
    ],
  },
  {
    name: 'Pulsars & Neutron Stars',
    icon: Radio,
    shortDescription: 'Rapidly rotating, highly magnetized remnants of massive stars.',
    longDescription: 'Neutron stars are the incredibly dense cores left behind after a massive star explodes as a supernova. Some neutron stars rotate rapidly and emit beams of radiation, appearing as pulsars if the beam sweeps across Earth. These cosmic lighthouses are studied across the spectrum, especially with X-ray (NICER, Chandra) and gamma-ray (Fermi) telescopes, revealing details about their extreme magnetic fields, composition, and the state of matter under conditions impossible to replicate on Earth.',
    imageUrl: 'https://i.pinimg.com/736x/39/6e/dc/396edcf2aef657a9c6b118a5629037bc.jpg',
    aiHint: 'pulsar lighthouse beam artist rendering',
    keyDiscoveries: [
      'Precise measurements of neutron star mass and radius, constraining the equation of state for dense matter.',
      'Detection of glitches and timing variations in pulsar rotation.',
      'Observation of powerful magnetic fields (magnetars).',
      'Using pulsar timing arrays to search for gravitational waves.',
    ],
    relevantTelescopes: [
        'Chandra X-ray Observatory',
        'Fermi Gamma-ray Space Telescope',
        'NICER (Neutron star Interior Composition Explorer)',
        // 'XMM-Newton', // Not in telescopeData yet
        // Radio Telescopes (ground-based primary)
    ],
  },
  {
    name: 'Cosmic Microwave Background',
    icon: Sparkles,
    shortDescription: 'The faint afterglow radiation from the Big Bang.',
    longDescription: 'The Cosmic Microwave Background (CMB) is the relic radiation left over from the Big Bang, permeating all of space. It provides a snapshot of the universe when it was only about 380,000 years old. Space telescopes like COBE, WMAP, and Planck have mapped the tiny temperature and polarization fluctuations in the CMB with increasing precision. These fluctuations are the seeds of the large-scale structures (galaxies and clusters) we see today, and studying them provides crucial information about the universe\'s age, composition, geometry, and origin.',
    imageUrl: 'https://i.pinimg.com/736x/13/6c/ba/136cba683901a368a9caca41ffa97132.jpg',
    aiHint: 'cosmic microwave background wmap planck comparison',
    keyDiscoveries: [
      'Confirmation of the Big Bang theory.',
      'Precise measurement of the age (~13.8 billion years) and composition (dark energy, dark matter, normal matter) of the universe.',
      'Evidence supporting the theory of cosmic inflation.',
      'Mapping the initial density fluctuations that grew into galaxies.',
    ],
    relevantTelescopes: [
        'Planck Space Observatory', // Past
        // 'WMAP (Past)', // Not in telescopeData yet
        // 'COBE (Past)', // Not in telescopeData yet
        'LiteBIRD (Future)' // Future
    ],
  },
];
