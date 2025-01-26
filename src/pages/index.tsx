import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import { tw } from 'twind/css';
import Preloader from '@/components/Preloader/Preloader';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showPage, setShowPage] = useState(false);

  const handlePreloaderExit = () => {
    setShowPage(true);
    setTimeout(() => setShowPreloader(false), 800);
  };

  return (
    <>
      <NextSeo title="Manual da Capitã Liberta Ventre" description="Manual da Capitã Liberta Ventre" />
      {showPreloader && <Preloader onExit={handlePreloaderExit} />}
      {showPage && (
        <Page>
          <Header />
          <main>
            <VideoSection />
            <ListSection />
            <SocialProof />
            <FeatureSection />
            <PricingTable />
          </main>
          <Footer />
        </Page>
      )}
    </>
  );
}
