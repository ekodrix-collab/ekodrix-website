export interface LocationData {
  slug: string;
  name: string;
  district: string;
  state: string;
  pincode?: string;
  nearbyCity?: string;
  distanceFromKondotty?: string;
}

export const LOCATIONS: LocationData[] = [
  // Primary - Kondotty
  { slug: "kondotty", name: "Kondotty", district: "Malappuram", state: "Kerala", pincode: "673638" },
  
  // Malappuram District
  { slug: "malappuram", name: "Malappuram", district: "Malappuram", state: "Kerala", pincode: "676505", distanceFromKondotty: "15 km" },
  { slug: "manjeri", name: "Manjeri", district: "Malappuram", state: "Kerala", pincode: "676121", distanceFromKondotty: "10 km" },
  { slug: "perinthalmanna", name: "Perinthalmanna", district: "Malappuram", state: "Kerala", pincode: "679322", distanceFromKondotty: "20 km" },
  { slug: "nilambur", name: "Nilambur", district: "Malappuram", state: "Kerala", pincode: "679329", distanceFromKondotty: "40 km" },
  { slug: "tirur", name: "Tirur", district: "Malappuram", state: "Kerala", pincode: "676101", distanceFromKondotty: "25 km" },
  { slug: "ponnani", name: "Ponnani", district: "Malappuram", state: "Kerala", pincode: "679577", distanceFromKondotty: "30 km" },
  { slug: "kottakkal", name: "Kottakkal", district: "Malappuram", state: "Kerala", pincode: "676503", distanceFromKondotty: "12 km" },
  { slug: "angadipuram", name: "Angadipuram", district: "Malappuram", state: "Kerala", pincode: "679321", distanceFromKondotty: "22 km" },
  { slug: "wandoor", name: "Wandoor", district: "Malappuram", state: "Kerala", pincode: "679328", distanceFromKondotty: "35 km" },
  { slug: "edappal", name: "Edappal", district: "Malappuram", state: "Kerala", pincode: "679576", distanceFromKondotty: "28 km" },
  { slug: "pandikkad", name: "Pandikkad", district: "Malappuram", state: "Kerala", pincode: "676521", distanceFromKondotty: "18 km" },
  { slug: "valanchery", name: "Valanchery", district: "Malappuram", state: "Kerala", pincode: "676552", distanceFromKondotty: "15 km" },
  { slug: "areekode", name: "Areekode", district: "Malappuram", state: "Kerala", pincode: "673639", distanceFromKondotty: "5 km" },
  { slug: "tanur", name: "Tanur", district: "Malappuram", state: "Kerala", pincode: "676302", distanceFromKondotty: "30 km" },
  { slug: "parappanangadi", name: "Parappanangadi", district: "Malappuram", state: "Kerala", pincode: "676303", distanceFromKondotty: "35 km" },
  { slug: "tirurangadi", name: "Tirurangadi", district: "Malappuram", state: "Kerala", pincode: "676306", distanceFromKondotty: "28 km" },
  { slug: "kuttippuram", name: "Kuttippuram", district: "Malappuram", state: "Kerala", pincode: "679571", distanceFromKondotty: "40 km" },
  { slug: "vengara", name: "Vengara", district: "Malappuram", state: "Kerala", pincode: "676304", distanceFromKondotty: "32 km" },
  { slug: "karuvarakundu", name: "Karuvarakundu", district: "Malappuram", state: "Kerala", pincode: "673641", distanceFromKondotty: "8 km" },
  { slug: "feroke", name: "Feroke", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "20 km" },
  { slug: "ramanattukara", name: "Ramanattukara", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "22 km" },
  { slug: "muthuvallur", name: "Muthuvallur", district: "Malappuram", state: "Kerala", distanceFromKondotty: "10 km" },
  { slug: "mampad", name: "Mampad", district: "Malappuram", state: "Kerala", distanceFromKondotty: "45 km" },
  { slug: "chemmad", name: "Chemmad", district: "Malappuram", state: "Kerala", distanceFromKondotty: "20 km" },
  
  // Kozhikode District
  { slug: "kozhikode", name: "Kozhikode", district: "Kozhikode", state: "Kerala", pincode: "673001", distanceFromKondotty: "30 km" },
  { slug: "calicut", name: "Calicut", district: "Kozhikode", state: "Kerala", pincode: "673001", distanceFromKondotty: "30 km" },
  { slug: "vatakara", name: "Vatakara", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "60 km" },
  { slug: "koyilandy", name: "Koyilandy", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "45 km" },
  { slug: "balussery", name: "Balussery", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "35 km" },
  { slug: "perambra", name: "Perambra", district: "Kozhikode", state: "Kerala", distanceFromKondotty: "40 km" },
  
  // Other Kerala Cities
  { slug: "kochi", name: "Kochi", district: "Ernakulam", state: "Kerala", pincode: "682001" },
  { slug: "ernakulam", name: "Ernakulam", district: "Ernakulam", state: "Kerala", pincode: "682011" },
  { slug: "trivandrum", name: "Trivandrum", district: "Thiruvananthapuram", state: "Kerala", pincode: "695001" },
  { slug: "thrissur", name: "Thrissur", district: "Thrissur", state: "Kerala", pincode: "680001" },
  { slug: "kannur", name: "Kannur", district: "Kannur", state: "Kerala", pincode: "670001" },
  { slug: "kollam", name: "Kollam", district: "Kollam", state: "Kerala", pincode: "691001" },
  { slug: "palakkad", name: "Palakkad", district: "Palakkad", state: "Kerala", pincode: "678001" },
  { slug: "kasaragod", name: "Kasaragod", district: "Kasaragod", state: "Kerala", pincode: "671121" },
  { slug: "kottayam", name: "Kottayam", district: "Kottayam", state: "Kerala", pincode: "686001" },
  { slug: "alappuzha", name: "Alappuzha", district: "Alappuzha", state: "Kerala", pincode: "688001" },
  { slug: "idukki", name: "Idukki", district: "Idukki", state: "Kerala" },
  { slug: "pathanamthitta", name: "Pathanamthitta", district: "Pathanamthitta", state: "Kerala" },
  { slug: "wayanad", name: "Wayanad", district: "Wayanad", state: "Kerala" },
  
  // Gulf locations (Ekodrix serves this market heavily)
  { slug: "dubai", name: "Dubai", district: "Dubai", state: "UAE" },
  { slug: "abu-dhabi", name: "Abu Dhabi", district: "Abu Dhabi", state: "UAE" },
  { slug: "sharjah", name: "Sharjah", district: "Sharjah", state: "UAE" },
  { slug: "doha", name: "Doha", district: "Doha", state: "Qatar" },
  { slug: "riyadh", name: "Riyadh", district: "Riyadh", state: "Saudi Arabia" },
  { slug: "muscat", name: "Muscat", district: "Muscat", state: "Oman" },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getKeralaLocations(): LocationData[] {
  return LOCATIONS.filter((l) => l.state === "Kerala");
}

export function getMalappuramLocations(): LocationData[] {
  return LOCATIONS.filter((l) => l.district === "Malappuram");
}
