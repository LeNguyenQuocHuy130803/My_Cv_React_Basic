
export const ROUTE_PATHS = {
  ROOT: '/',
  ABOUT_ME: '/about-me',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  SKILLS: '/skills',
  EDUCATION: '/education',
  INTERESTS: '/interests',
  THE_END: '/the-end',
} as const;

/**
 * Route configuration type
 */
export type RoutePath = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];

/**
 * Check if a route path is valid
 */
export const isValidRoute = (path: string): boolean => {
  return Object.values(ROUTE_PATHS).includes(path as RoutePath);
};

/**
 * Section IDs matching route keys
 */
export const SECTION_IDS = {
  ABOUT_ME: 'about-me',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  EDUCATION: 'education',
  INTERESTS: 'interests',
  THE_END: 'the-end',
} as const;

/**
 * Route labels (menu display text)
 */
export const ROUTE_LABELS = {
  ABOUT_ME: 'About Me',
  EXPERIENCE: 'Experience',
  PROJECTS: 'Projects',
  SKILLS: 'Skills',
  EDUCATION: 'Education',
  INTERESTS: 'Interests',
  THE_END: 'The End',
  DOWNLOAD_PDF: 'Download PDF',
} as const;

/**
 * Image assets paths
 */
export const IMAGE_PATHS = {
  AVATAR: '/assets/imgs/my picure.JPG',
} as const;

/**
 * PDF download configuration
 */
export const PDF_CONFIG = {
  URL: '/CV_LeNguyenQuocHuy.pdf',
  FILENAME: 'CV_LeNguyenQuocHuy.pdf',
} as const;

/**
 * UI Style constants
 */
export const UI_STYLES = {
  PDF_BUTTON: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFA500',
  },
} as const;
