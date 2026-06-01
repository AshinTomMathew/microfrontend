import CategoryStrip from '../components/CategoryStrip';
import CATEGORIES from '../data/categories';

export default function HomePage() {
  return (
    <>
      <CategoryStrip categories={CATEGORIES} />
    </>
  );
}
