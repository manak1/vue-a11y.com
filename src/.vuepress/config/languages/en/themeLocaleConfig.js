const sidebar = require('./sidebarStructure')

module.exports = {
  enabled: true,
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  lastUpdatedText: 'Last update',
  backToTopText: 'back to page top',
  backToText: 'back to',
  shareLinksText: 'Share on',
  externalLinkText: 'Opens in a new tab',
  skipTo: {
    label: 'Skip to main content',
    to: '#main'
  },
  newsletter: {
    title: 'Subscribe to the newsletter',
    label: 'Email address',
    description: 'Enter your email address and receive articles, videos, updates and events from the Vue.js community and accessibility.',
    textButton: 'Subscribe'
  },
  toc: {
    title: 'On this page'
  },
  nav: [
    {
      text: 'Project',
      link: '/project/'
    },
    {
      text: 'Posts',
      link: '/posts/'
    },
    {
      text: 'Recipes',
      link: '/recipes/'
    },
    {
      text: 'Settings',
      link: '/settings/'
    }
  ],
  sidebar: {
    '/project/': sidebar.project,
    '/posts/': sidebar.posts,
    '/category/': '/posts/',
    '/recipes/': sidebar.recipes
  },
  a11y: {
    codeSnippet: {
      copy: {
        text: 'Copy to clipboard',
        ariaLabel: 'Copy code snippet to clipboard',
        textCopied: 'Code copied!'
      },
      skip: {
        text: 'Skip',
        ariaLabel: 'Skip code snippet'
      }
    },
    labels: {
      menuButton: {
        open: 'Open sidebar navigation',
        close: 'close sidebar navigation'
      }
    },
    settings: {
      theme: {
        altText: 'Browser themed illustration %cm'
      }
    },
    landmarks: {
      nav: {
        main: 'Main',
        secondary: 'Secondary'
      },
      post: {
        summary: 'Summary',
        content: 'Content post'
      }
    }
  }
}
