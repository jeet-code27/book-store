export const PRODUCTS = {
  'claude-guide': {
    id: 'claude-guide',
    title: 'The Complete Guide to Building Skills for Claude',
    subtitle: 'Master Claude AI — From Beginner to Advanced',
    language: 'English',
    price: '$9.99',
    priceUSD: 9.99,
    priceINR: 749,
    pages: '100+',
    format: 'PDF',
    coverImage: '/images/claude-guide-cover.png',
    description: 'A comprehensive guide to using Claude AI effectively. Learn prompt engineering basics, how to build advanced workflows, and use Claude Artifacts to supercharge your productivity.',
    chapters: [
      'Introduction to Claude',
      'Prompt Engineering Basics',
      'Claude Artifacts',
      'Building Workflows',
      'Advanced Techniques',
    ],
    whyBuy: "Stop treating Claude like a simple chatbot. This advanced bundle transforms Claude into your personal 10x assistant. By mastering context windows, prompt engineering, and the revolutionary Artifacts feature, you'll save hundreds of hours every month and completely change how you work.",
    whoIsItFor: [
      "Entrepreneurs & Business Owners looking to automate complex workflows.",
      "Developers & Coders wanting an advanced pair-programming AI.",
      "Content Creators & Marketers who need high-quality, professional output.",
      "Anyone feeling stuck with basic AI prompts and wanting advanced skills."
    ],
    whatsIncluded: [
      { title: "Core Guide", desc: "The Complete Guide to Building Skills for Claude (Master fundamentals and advanced logic)" },
      { title: "Artifacts Guide", desc: "Claude Artifacts Guide (Learn to create UI, code, and documents visually)" },
      { title: "Prompt Playbook", desc: "The Ultimate Premium AI Prompts Playbook (500+ battle-tested prompts ready to copy & paste)" }
    ]
  },
  'tintin-collection': {
    id: 'tintin-collection',
    title: 'The Tintin Collection – Complete Adventures',
    subtitle: 'Digital Edition',
    language: 'English',
    price: '$14.99',
    priceUSD: 14.99,
    priceINR: 1200,
    pages: '1000+',
    format: 'PDF / CBR',
    coverImage: '/images/tintin-cover.png',
    description: 'Experience the complete adventures of Tintin, Snowy, and Captain Haddock in this ultimate digital collection.',
    chapters: [
      'Tintin in the Land of the Soviets',
      'Tintin in the Congo',
      'Tintin in America',
      'Cigars of the Pharaoh',
      'The Blue Lotus',
    ],
    whyBuy: "This is the ultimate digital collection of all 24 classic Tintin comic albums created by Hergé. Read them in high-quality digital format anytime, anywhere on your tablet, phone, or computer.",
    whoIsItFor: [
      "Comic book enthusiasts and collectors.",
      "Parents wanting to introduce their children to classic adventures.",
      "Nostalgic fans of Hergé's timeless storytelling."
    ],
    whatsIncluded: [
      { title: "Complete 24 Albums", desc: "All 24 original Tintin comic albums in high-definition." },
      { title: "Digital Formats", desc: "Available in both PDF and CBZ/CBR formats for comic readers." },
      { title: "Bonus Material", desc: "Includes character guides and behind-the-scenes artwork." }
    ]
  },
  'divorce-dad-eng': {
    id: 'divorce-dad-eng',
    title: "The Divorced Dad's Survival Guide",
    subtitle: 'From Chaos to Clarity',
    language: 'English',
    price: '$9.99',
    priceUSD: 9.99,
    priceINR: 499,
    pages: '100+',
    format: 'PDF',
    coverImage: '/images/divorce-dad-eng-cover.png',
    description: 'A practical, actionable guide to being a great dad after a divorce. This book will provide you with the clarity and direction you need during tough times.',
    chapters: [
      'The First 30 Days',
      'Daily Survival System',
      'Relationship with the Kids',
      'Harsh Realities',
      'Rebuilding Yourself',
    ],
    whyBuy: "Divorce is NOT a failure—it is simply the end of one chapter and the exciting beginning of another. Society often paints it as a tragedy, but the truth is: a happy, thriving divorced dad is infinitely better for his children than a miserable married one. This book is an empowering, positive roadmap to taking your life back. It teaches you how to turn this transition into the greatest catalyst for personal growth.",
    whoIsItFor: [
      "Fathers who want to remain a hero and a strong presence in their kids' lives.",
      "Men seeking mental clarity and actionable steps during a confusing transition.",
      "Dads who are ready to rebuild themselves and start an incredible new chapter."
    ],
    whatsIncluded: [
      { title: "The Core Survival Guide", desc: "Practical day-to-day strategies for independent living and co-parenting." },
      { title: "Communication Frameworks", desc: "Scripts and methods to communicate peacefully with your ex and your kids." },
      { title: "Mindset Roadmap", desc: "A psychological blueprint to shift from grief to unstoppable personal growth." }
    ]
  },
};

export type ProductId = keyof typeof PRODUCTS;
export type Product = typeof PRODUCTS[ProductId];
