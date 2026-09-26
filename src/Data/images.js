const images = [
  {
    id: 1,
    title: "Quiet Mountains",
    description: "A peaceful morning hidden between the mountains.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    title: "Concrete Dreams",
    description: "Modern architecture meeting dramatic geometry.",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 3,
    title: "Midnight City",
    description: "The city becomes something completely different after dark.",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 4,
    title: "Desert Road",
    description: "A long road disappearing into the golden horizon.",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Morning Coffee",
    description: "Slow mornings and warm light.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Blue Horizon",
    description: "Ocean air and an endless blue horizon.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Urban Lines",
    description: "Architecture shaped by light and symmetry.",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Rainy Streets",
    description: "Reflections transform an ordinary city evening.",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Hidden Valley",
    description: "A quiet escape far away from crowded streets.",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 10,
    title: "Sunday Table",
    description: "A simple table filled with small moments.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 11,
    title: "Liquid Shapes",
    description: "Abstract forms floating through a dreamlike space.",
    category: "Abstract",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 12,
    title: "Forest Light",
    description: "Sunlight breaking through a quiet forest.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 13,
    title: "Glass House",
    description: "Clean architecture surrounded by natural light.",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 14,
    title: "Neon Nights",
    description: "Color, motion and energy after sunset.",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 15,
    title: "Island Escape",
    description: "A tropical destination surrounded by calm water.",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 16,
    title: "Creative Desk",
    description: "A workspace designed for ideas.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 17,
    title: "Color Theory",
    description: "Unexpected colors creating visual balance.",
    category: "Abstract",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 18,
    title: "Wild Coast",
    description: "The meeting point between land and sea.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 19,
    title: "Minimal Structure",
    description: "Simple shapes creating a powerful composition.",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 20,
    title: "City Motion",
    description: "Life moving quickly through a modern city.",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 21,
    title: "Road to Somewhere",
    description: "Sometimes the journey is the destination.",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 22,
    title: "Soft Morning",
    description: "A quiet scene filled with natural light.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 23,
    title: "Dream State",
    description: "A surreal composition inspired by imagination.",
    category: "Abstract",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 24,
    title: "Golden Peaks",
    description: "Mountain peaks glowing under evening sunlight.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
];

export default images;