import {
  RiMailLine,
  RiGithubLine,
  RiLinkedinFill,
  RiDownloadCloud2Line,
} from 'react-icons/ri';

const contactData = [
  {
    title: 'GitHub',
    tip: 'Visit my GitHub',
    link: 'https://github.com/sadaftarannum21',
    icon: <RiGithubLine />,
  },
  {
    title: 'LinkedIn',
    tip: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/sadaf-tarannum',
    icon: <RiLinkedinFill />,
  },
  {
    title: 'Email',
    tip: 'Send me an Email',
    link: 'mailto:sadaf.tarannum.21@gmail.com',
    icon: <RiMailLine />,
  },
  {
    title: 'Resume',
    tip: 'Download my Resume',
    link: 'link-to-resume',
    icon: <RiDownloadCloud2Line />,
  },
];

export default contactData;
