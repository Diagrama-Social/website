import { getPermalink, getBlogPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Resumenes',
      links: [
        {
          text: 'Libros',
          href: getPermalink('/category/libros'),
        },
        {
          text: 'Capítulos',
          href: getPermalink('category/capitulos'),
        },
        {
          text: 'Artículos',
          href: getPermalink('category/articulos'),
        },
      ],
    },
    {
      text: 'Lecciones',
      links: [
        {
          text: 'Teorías y conceptos',
          href: getPermalink('/category/teorias'),
        },
        {
          text: 'Métodos y técnicas',
          href: getPermalink('/category/metodos'),
        },
      ],
    },
    {
      text: 'Análisis',
      links: [
        {
          text: 'Ensayos',
          href: getPermalink('/category/ensayos'),
        },
        {
          text: 'Casos',
          href: getPermalink('/category/casos'),
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
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@DiagramaSocial' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Diagrama-Social' },
  ],
  footNote: `
    Desarrollado por el <a class="text-lab underline dark:text-lab dark:hover:text-gray-200" href="https://labtecnosocial.org/">Lab TecnoSocial</a>
  `,
};
