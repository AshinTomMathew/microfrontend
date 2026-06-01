import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}
    >
      <i className="fa fa-angle-double-up"></i>
    </button>
  );
}
