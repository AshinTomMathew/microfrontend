/**
 * categories.js
 * ─────────────────────────────────────────────────────────────────
 * Central data store for all course categories displayed in the
 * CategoryStrip component on the homepage (and anywhere else
 * CategoryStrip is used).
 *
 * ✅ HOW TO ADD A NEW CATEGORY:
 *   Add a new object to the array below — the strip will
 *   automatically render it with the same hover styling as
 *   all other categories. No other file changes needed.
 *
 * ─────────────────────────────────────────────────────────────────
 * OBJECT SHAPE:
 * {
 *   icon:    {string}  Font Awesome 5 class  e.g. 'fa-code'
 *   label:   {string}  Display name shown below the icon
 *   courses: {number}  Number of courses (used for tooltips / future display)
 *   color:   {string}  Hex color — drives the hover accent, glow & indicator
 * }
 * ─────────────────────────────────────────────────────────────────
 */

const CATEGORIES = [
  { icon: 'fa-pencil-ruler',  label: 'Web Design',    courses: 120, color: '#2878EB' },
  { icon: 'fa-code',          label: 'Development',   courses: 95,  color: '#F14D5D' },
  { icon: 'fa-chart-line',    label: 'Marketing',     courses: 78,  color: '#28a745' },
  { icon: 'fa-camera-retro',  label: 'Photography',   courses: 54,  color: '#ffc107' },
  { icon: 'fa-briefcase',     label: 'Business',      courses: 67,  color: '#6f42c1' },
  { icon: 'fa-music',         label: 'Music',         courses: 41,  color: '#e83e8c' },
  { icon: 'fa-chart-bar',     label: 'Finance',       courses: 88,  color: '#17a2b8' },
  { icon: 'fa-layer-group',   label: 'UI/UX Design',  courses: 63,  color: '#fd7e14' },
  { icon: 'fa-database',      label: 'Data Science',  courses: 52,  color: '#20c997' },
  { icon: 'fa-mobile-alt',    label: 'Mobile Apps',   courses: 47,  color: '#dc3545' },
  { icon: 'fa-film',          label: 'Video Editing', courses: 35,  color: '#6610f2' },
  { icon: 'fa-globe',         label: 'Languages',     courses: 29,  color: '#fd7e14' },
  { icon: 'fa-robot',         label: 'AI & ML',       courses: 22,  color: '#0dcaf0' },
  
];

export default CATEGORIES;
