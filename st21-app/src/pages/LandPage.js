import Layout from '../components/Layout.js';
import MiddleBoxContent from '../components/MiddleBoxContent.js';
import CenterContent from '../components/CenterContent.js';

function LandPage() {
  return (
    <Layout showMiddleBox={true} middleBoxContent={<MiddleBoxContent />}>
      {<CenterContent />}
    </Layout>
  );
}

export default LandPage;
