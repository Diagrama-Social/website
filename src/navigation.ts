import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Resumenes',
      links: [
        {
          text: 'Libros',
          href: getPermalink('/resumenes/libros'),
        },
        {
          text: 'Capítulos',
          href: getPermalink('resumenes/capitulos'),
        },
        {
          text: 'Artículos',
          href: getPermalink('resumenes/articulos'),
        },
      ],
    },
    {
      text: 'Lecciones',
      links: [
        {
          text: 'Teorías y conceptos',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Métodos y técnicas',
          href: getPermalink('/landing/sales'),
        },
      ],
    },
    {
      text: 'Análisis',
      links: [
        {
          text: 'Ensayos',
          href: getBlogPermalink(),
        },
        {
          text: 'Casos',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
      ],
    },
  ],
  actions: [{ text: 'Suscribite', href: 'https://www.youtube.com/@DiagramaSocial', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Desarrollado por el <a class="text-green-500 underline dark:text-muted" href="https://labtecnosocial.org/">Lab TecnoSocial</a>
  `,
};
