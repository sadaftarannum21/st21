import EmailLink from './EmailLink';

const FooterContent = () => {
  const footerText = `Let's talk opportunities. Feel free to reach out!<br/>Data Analysis, Business Intelligence, Data Quality Engineering.`;

  return (
    <EmailLink
      email="sadaf.tarannum.21@gmail.com"
      text={<span dangerouslySetInnerHTML={{ __html: footerText }} />}
    />
  );
};

export default FooterContent;
