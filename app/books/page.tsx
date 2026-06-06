import { PRODUCTS } from '@/lib/products';
import BookCard from '@/components/BookCard';

export const metadata = {
  title: 'All Books | Premium Digital Store',
  description: 'Browse our collection of premium digital guides and books.',
};

export default function BooksPage() {
  const books = Object.values(PRODUCTS);

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center relative">
          <h1 className="text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative -rotate-1">
            Our Books
            <span className="absolute -bottom-2 left-0 w-full h-2 border-b-[4px] border-dashed border-[#ff4d4d]"></span>
          </h1>
          <p className="text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] max-w-2xl mx-auto mt-6">
            Discover our collection of high-quality digital guides designed to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book, i) => (
            <div key={book.id} className={i % 2 !== 0 ? 'md:mt-8' : ''}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
