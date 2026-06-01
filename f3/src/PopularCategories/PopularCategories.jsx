/**
 * @file PopularCategories.jsx
 * @description Auto-sliding flip-card carousel using the `categories` array
 *              from data.js. No icon library — emojis from data + inline SVG arrows.
 */
import React, { useRef, useState, useEffect } from 'react';
import { categories } from '../../../data/data.js';
import styles from './PopularCategories.module.css';

/* ── Inline SVG nav arrows (no library needed) ─────────── */
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/* ── Reusable flip card ────────────────────────────────── */
const CategoryCard = ({ category }) => (
  <div className={styles['carousel-card']}>
    <div className={styles['flip-card-inner']}>

      {/* ── Front face ── */}
      <div className={styles['flip-card-front']}>
        <div
          className={styles['carousel-icon-box']}
          style={{ backgroundColor: category.bgColor }}
        >
          <span className={styles.emoji}>{category.icon}</span>
        </div>
        <span className={styles['carousel-card-title']}>{category.name}</span>
        <span className={styles['course-count']}>{category.courses} Courses</span>
      </div>

      {/* ── Back face ── */}
      <div className={styles['flip-card-back']}>
        <div
          className={styles['carousel-icon-box']}
          style={{ backgroundColor: category.bgColor }}
        >
          <span className={styles.emoji}>{category.icon}</span>
        </div>
        <span className={styles['carousel-card-title']}>{category.name}</span>
        <p className={styles['flip-card-desc']}>{category.description}</p>
        <a href="#" className={styles['explore-btn']}>
          View Courses
        </a>
      </div>

    </div>
  </div>
);

/* ── Main component ────────────────────────────────────── */
const PopularCategories = () => {
  const scrollRef  = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPaused,   setIsPaused]   = useState(false);

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* Auto-slide every 2 s */
  useEffect(() => {
    if (isPaused || filtered.length === 0) return;

    const id = setInterval(() => {
      const el = scrollRef.current;
      if (!el || el.children.length === 0) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollWidth <= clientWidth) return;
      const step = el.children[0].offsetWidth + 30;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(id);
  }, [isPaused, filtered.length]);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;
    const step = el.children[0].offsetWidth + 30;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className={styles['carousel-section']} aria-labelledby="popular-cat-heading">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles['carousel-header']}>
          <h2 id="popular-cat-heading">
            Find out by popular<br />Categories
          </h2>
          <p>
            We offer a brand-new approach to the most basic learning paradigms.
            Choose from a wide range of options and gain new skills!
          </p>

          {/* Search — uses inline SVG, no library */}
          <div className={styles['category-search-wrapper']}>
            <div className={styles['search-input-container']}>
              <label htmlFor="popular-category-search" className={styles['search-icon']} aria-label="Search categories">
                <SearchIcon />
              </label>
              <input
                id="popular-category-search"
                name="popular-category-search"
                type="search"
                placeholder="Search categories…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles['category-search-input']}
              />
            </div>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className={styles['carousel-container-wrapper']}>

          {filtered.length > 0 && (
            <button
              className={`${styles['carousel-nav-btn']} ${styles.left}`}
              onClick={() => scrollBy(-1)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>
          )}

          {filtered.length > 0 ? (
            <div
              className={styles['carousel-track']}
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {filtered.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className={styles['no-results-message']}>
              <span className={styles['no-results-icon']}>🔍</span>
              <p>No categories found matching "<strong>{searchTerm}</strong>"</p>
            </div>
          )}

          {filtered.length > 0 && (
            <button
              className={`${styles['carousel-nav-btn']} ${styles.right}`}
              onClick={() => scrollBy(1)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
