export const metadata = {
  title: 'About Us | Premium Book Store',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 rotate-1 max-w-3xl mx-auto">
          
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-10 inline-block relative -rotate-2">
            About Us
            <span className="absolute -bottom-2 left-0 w-full h-3 border-b-[4px] border-dashed border-[var(--color-secondary-500)] wobbly"></span>
          </h1>
          
          <div className="space-y-8 text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-relaxed">
            <p className="bg-[var(--color-brand-50)] border-[3px] border-[#2d2d2d] wobbly-sm p-6 -rotate-1 hard-shadow-sm">
              Welcome to our digital bookstore. We specialize in creating high-quality, actionable guides 
              designed to solve real-world problems. Whether you&apos;re looking to master advanced AI tools 
              like Claude or navigating complex life transitions, our mission is to provide clarity through 
              comprehensive, well-researched content.
            </p>
            
            <h2 className="text-4xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mt-12 mb-6">Our Approach</h2>
            <p>
              We believe in a direct-to-reader approach. By cutting out the middlemen, we can offer 
              premium knowledge at an accessible price point, delivered directly to your inbox.
            </p>
            
            <h2 className="text-4xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mt-12 mb-6">Why No Automated Payments?</h2>
            <p>
              To keep costs low and maintain a personal connection with our readers, we handle 
              transactions manually. When you place an order, the author contacts you directly 
              with payment details. Once settled, you receive your digital copy immediately. 
            </p>
            <p className="font-heading text-3xl text-[#ff4d4d] rotate-2 mt-6 inline-block">
              It&apos;s simple, secure, and personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
