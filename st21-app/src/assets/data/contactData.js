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
    link: 'https://www.dropbox.com/scl/fi/26fwdxemb1fknvzww3nt4/Sadaf-Tarannum-Resume-Data.pdf?rlkey=ctn3guy8jype2hj7f5xb63pto&st=5lu2oasj&dl=0',
    icon: <RiDownloadCloud2Line />,
  },
];

export default contactData;
