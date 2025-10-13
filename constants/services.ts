// /data/services.ts

export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  icon: string;
}

export const allServices: Service[] = [
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    category: 'Design',
    icon: '🎨',
    description:
      'From stunning flyers and brand visuals to creative digital illustrations — I craft designs that connect your brand with your audience and make a lasting impression.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
  {
    slug: 'office-signage',
    name: 'Office Signage',
    category: 'Printing',
    icon: '🏢',
    description:
      'Professional indoor and outdoor signage that enhances your workspace and brand visibility.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
  {
    slug: 'mugs',
    name: 'Custom Mugs',
    category: 'Gifts',
    icon: '☕',
    description:
      'Personalized mugs with unique designs and high-quality prints. Ideal for corporate branding, birthdays, and special moments.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
  {
    slug: 'banners',
    name: 'Banners & Large Prints',
    category: 'Printing',
    icon: '🏳️',
    description:
      'High-resolution banners and signage that make your brand stand out — perfect for events, storefronts, and campaigns.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
  {
    slug: 'flyers',
    name: 'Flyers',
    category: 'Printing',
    icon: '📜',
    description:
      'Beautifully designed flyers that communicate your brand message and attract attention.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
  {
    slug: 'birthday-surprise',
    name: 'Birthday Surprise',
    category: 'Events',
    icon: '🎂',
    description:
      'Make every birthday unforgettable with creative design gifts, prints, and decorations.',
    images: ['/logo.jpg', '/tunde.jpg', '/wavy-bg.png'],
  },
];
