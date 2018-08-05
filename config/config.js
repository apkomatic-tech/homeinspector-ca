export const CONTACT_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://formspree.io/homeinspectorsca@gmail.com'
    : 'https://formspree.io/konstantindev925@gmail.com';
export const EMAIL_CONFIRMATION_URL =
  process.env.NODE_ENV === 'production' ? '//homeinspectorscalifornia.com/thank-you' : '//localhost:3000/thank-you';

export const LINKS = [
  {
    id: 1,
    href: '/',
    label: 'home'
  },
  {
    id: 2,
    href: '/about-us',
    label: 'about us'
  },
  {
    id: 3,
    href: '/services',
    label: 'services'
  },
  {
    id: 4,
    href: '/contact-us',
    label: 'contact'
  },
  {
    id: 5,
    href: '/faq',
    label: 'FAQ'
  }
];
