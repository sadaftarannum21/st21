import AboutCardWrapper from './AboutCardWrapper';
import CardContentWrapper from './CardContentWrapper';
import Title from './Title';
import ContentText from './ContentText';
import CopyrightBox from './CopyrightBox';

const AboutCard = () => {
  return (
    <AboutCardWrapper>
      <CardContentWrapper>
        <Title />
        <ContentText />
        <CopyrightBox />
      </CardContentWrapper>
    </AboutCardWrapper>
  );
};

export default AboutCard;
