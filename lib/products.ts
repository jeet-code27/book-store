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
  'divorce-dad': {
    id: 'divorce-dad',
    title: 'तलाकशुदा पिता की जीवन-रक्षा मार्गदर्शिका',
    subtitle: 'अराजकता से स्पष्टता तक',
    language: 'Hindi',
    price: '$6',
    priceUSD: 6,
    priceINR: 499,
    pages: '100+',
    format: 'PDF',
    coverImage: '/images/divorce-dad-cover.png',
    description: 'तलाक के बाद एक अच्छे पिता बने रहने की व्यावहारिक मार्गदर्शिका। यह पुस्तक आपको कठिन समय में स्पष्टता और मार्गदर्शन प्रदान करेगी।',
    chapters: [
      'पहले 30 दिन',
      'दैनिक जीवन-रक्षा प्रणाली',
      'बच्चों के साथ रिश्ता',
      'कठोर वास्तविकताएं',
      'खुद को फिर से बनाना',
    ],
    whyBuy: "तलाक ज़िंदगी का अंत नहीं है, बल्कि यह एक नई और बेहतर शुरुआत का मौका है! समाज अक्सर इसे एक हार या 'बुरी चीज़' की तरह देखता है, लेकिन सच यह है कि एक खुशहाल अलग पिता, एक दुखी शादीशुदा पिता से सौ गुना बेहतर होता है। यह किताब आपको सिखाएगी कि कैसे अपने इस नए सफर को आज़ादी से गले लगाएँ, और अपने बच्चों के लिए सबसे मज़बूत इंसान बनकर उभरें। आपका नया, शानदार जीवन बस शुरू ही हुआ है!",
    whoIsItFor: [
      "जो पिता अपने बच्चों के लिए एक 'हीरो' बने रहना चाहते हैं।",
      "जिन्हें इस मुश्किल दौर में मानसिक स्पष्टता और एक सही दिशा की ज़रूरत है।",
      "जो डिप्रेशन से बाहर निकलकर एक नई, बेहतर और खुशहाल शुरुआत करना चाहते हैं।"
    ],
    whatsIncluded: [
      { title: "व्यावहारिक मार्गदर्शिका", desc: "हर दिन के लिए प्रैक्टिकल टिप्स और सर्वाइवल ट्रिक्स।" },
      { title: "कम्युनिकेशन फ्रेमवर्क", desc: "पूर्व-पत्नी और बच्चों के साथ बिना झगड़े बात करने के प्रभावी तरीके।" },
      { title: "माइंडसेट शिफ्ट", desc: "निराशा से बाहर निकलकर एक मजबूत और आज़ाद इंसान बनने का रोडमैप।" }
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
