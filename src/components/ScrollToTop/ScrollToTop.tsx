import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to top on every route change.
 * Wrap inside <BrowserRouter> since it uses useLocation().
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll — no smooth, so it feels like a real page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
