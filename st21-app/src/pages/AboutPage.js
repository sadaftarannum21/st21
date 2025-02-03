import Layout from "../components/Layout";
import AboutCard from "../components/AboutCard";

function AboutPage() {
  return (
    <Layout showMiddleBox={false} middleBoxContent={null}>
      <AboutCard />
    </Layout>
  );
}

export default AboutPage;
