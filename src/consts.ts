import type { Site, Page, Links, Socials } from '@types'

// Global
export const SITE: Site = {
  TITLE: '旷野之森',
  DESCRIPTION: '人生是一场没有终点的探索。',
  AUTHOR: 'weedien'
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.'
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.'
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.'
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.'
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/'
  },
  {
    TEXT: 'Work',
    HREF: '/work'
  },
  {
    TEXT: 'Blog',
    HREF: '/blog'
  },
  {
    TEXT: 'Projects',
    HREF: '/projects'
  }
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'weedien@qq.com',
    HREF: 'mailto:weedien@qq.com'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'weedien',
    HREF: 'https://github.com/weedien'
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'markhorn-dev',
    HREF: 'https://www.linkedin.com/in/markhorn-dev/'
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: 'markhorn_dev',
    HREF: 'https://twitter.com/markhorn_dev'
  }
]
