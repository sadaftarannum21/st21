import { Box } from '@mui/material';
import MiddleBoxWrapper from './MiddleBoxWrapper';
import MiddleBox from './MiddleBox';
import StackContainer from './StackContainer';
import Header from './Header';
import Footer from './Footer';
import { contentBoxStyle } from '../assets/styles/boxStyles';

function Layout({ showMiddleBox, middleBoxContent, children }) {
  return (
    <StackContainer>
      <MiddleBoxWrapper>
        <Header />
      </MiddleBoxWrapper>
      {showMiddleBox && <MiddleBox content={middleBoxContent} />}
      <Box sx={contentBoxStyle}>{children}</Box>
      <Footer />
    </StackContainer>
  );
}

export default Layout;
