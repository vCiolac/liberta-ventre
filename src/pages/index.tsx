import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
// import Preloader from '@/components/Preloader/Preloader';

export default function Home() {
  // const [showPreloader, setShowPreloader] = useState(true);
  // const [showPage, setShowPage] = useState(false);

  // const handlePreloaderExit = () => {
  //   setShowPage(true);
  //   setTimeout(() => setShowPreloader(false), 800);
  // };

  return (
    <>
      <NextSeo
        title="Manual da Capitã Liberta-Ventre | Guia Definitivo"
        description="Descubra como restaurar seu intestino naturalmente e se livrar da constipação de uma vez por todas 
        com o Manual da Capitã Liberta-Ventre."
        canonical="https://www.capitalibertaventre.com.br/"
        openGraph={{
          url: `https://www.capitalibertaventre.com.br/`,
          title: `Manual da Capitã Liberta-Ventre | Guia Definitivo`,
          // eslint-disable-next-line max-len
          description: `Descubra como restaurar seu intestino naturalmente e se livrar da constipação de uma vez por todas com o Manual da Capitã Liberta-Ventre.`,
          images: [
            {
              url: `https://www.capitalibertaventre.com.br/images/og-image.png`,
              width: 1200,
              height: 630,
              alt: `Manual da Capitã Liberta-Ventre`,
            },
          ],
          site_name: `Capitã Liberta-Ventre`,
        }}
      />

      {/* {showPreloader && <Preloader onExit={handlePreloaderExit} />} */}
      {/* {showPage && ( */}
      <Page>
        <Header />
        <main>
          <VideoSection />
          <SocialProof />
          <ListSection />
          <FeatureSection />
          <PricingTable />
        </main>
        <Footer />
      </Page>
      {/* )} */}
    </>
  );
}
