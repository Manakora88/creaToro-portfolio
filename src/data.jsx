import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaFigma, FaWordpress } from 'react-icons/fa'
import { SiAdobeillustrator } from 'react-icons/si'
import img1 from './img/yummmenu.png'
import img2 from './img/unsplash.png'
import img3 from './img/github.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'start' },
  { id: nanoid(), href: '#about', text: 'o mnie' },
  { id: nanoid(), href: '#skills', text: 'umiejętności' },
  { id: nanoid(), href: '#projects', text: 'projekty' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-rose-500" />,
    text: 'Posiadam wiedzę w zakresie HTML i CSS, umiejętnie tworzę atrakcyjne, nowoczesne i responsywne strony internetowe, zapewniające optymalne doświadczenia użytkowników.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-rose-500" />,
    text: 'Przy wykorzystaniu JavaScript, tworzę interaktywne i dynamiczne aplikacje internetowe, charakteryzujące się płynnością w działaniu i funkcjonalnością.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-rose-500" />,
    text: 'React pozwala mi na tworzenie wydajnych i interaktywnych aplikacji front-endowych, ze szczególnym naciskiem na architekturę komponentową.',
  },
  {
    id: nanoid(),
    title: 'Adobe Illustrator',
    icon: <SiAdobeillustrator className="h-16 w-16 text-rose-500" />,
    text: 'W graficznym programie Adobe Illustrator wykonuję grafiki wektorowe, które wykorzystuję następnie zarówno w Internecie, jak i w druku. ',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className="h-16 w-16 text-rose-500" />,
    text: 'W programie Figma projektuję aplikacje internetowe z ich pełną interaktywnością, do przetestowania przez Klienta.',
  },
  {
    id: nanoid(),
    title: 'Wordpress',
    icon: <FaWordpress className="h-16 w-16 text-rose-500" />,
    text: 'Tworzę strony internetowe z wykorzystaniem WordPress. Dzięki niemu moi Klienci mogą później łatwo sami zarządzać treścią na swoich stronach, blogach, czy w swoich sklepach.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://menu-yummmenu.netlify.app/',
    github: 'https://github.com/Manakora88/Menu-Yummmenu',
    title: 'yummmenu',
    text: 'Strona treningowa, przygotowana w React, Vite.js. Zawiera menu restauracji, sortowanie po kategoriach, dodatkowo opinie o restauracji w postaci samoprzewijającej się karuzeli. Wygląda naprawdę smacznie!',
  },
  {
    id: nanoid(),
    img: img2,
    url: 'https://my-unsplash-images.netlify.app/',
    github: 'https://github.com/Manakora88/Unsplash-Project-in-Vite',
    title: 'Unsplash Images',
    text: 'Strona treningowa, przygotowana w React, Vite.js. Wykorzystuje Unsplash API, Local Storage, ENV Variables. Posiada przełączanie motywów między ciemnym a jasnym. ',
  },
  {
    id: nanoid(),
    img: img3,
    url: 'https://react-cra-github-users.netlify.app',
    github: 'https://github.com/Manakora88/react-github-users',
    title: 'Github users search',
    text: 'Strona treningowa, przygotowana w React, Create React App. Wykorzystuje  Github API, React Router, Fusion Charts oraz Auth0.',
  },
]
