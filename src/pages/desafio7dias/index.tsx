import { NextSeo } from 'next-seo';
import FeatureSectionDesafio from '@/components/desafio/feature-section';
import FooterDesafio from '@/components/desafio/footer';
import HeaderDesafio from '@/components/desafio/header';
import ListSectionDesafio from '@/components/desafio/list-section';
import PageDesafio from '@/components/desafio/page';
import PricingTableDesafio from '@/components/desafio/pricing-table';
import SocialProofDesafio from '@/components/desafio/social-proof';

export default function Desafio7Dias() {
  return (
    <>
      <NextSeo
        title="Desafio 7 Dias | Transforme Sua Vida"
        description="Participe do Desafio 7 Dias e descubra como melhorar sua saúde e bem-estar em apenas uma semana."
        canonical="https://www.capitalibertaventre.com.br/desafio7dias"
        openGraph={{
          url: `https://www.capitalibertaventre.com.br/desafio7dias`,
          title: `Desafio 7 Dias | Transforme Sua Vida`,
          // eslint-disable-next-line max-len
          description: `Participe do Desafio 7 Dias e descubra como melhorar sua saúde e bem-estar em apenas uma semana.`,
          images: [
            {
              url: `https://www.capitalibertaventre.com.br/images/desafio7dias-og.png`,
              width: 1200,
              height: 630,
              alt: `Desafio 7 Dias`,
            },
          ],
          site_name: `Desafio 7 Dias`,
        }}
      />
      <PageDesafio>
        <HeaderDesafio />
        <main>
          <ListSectionDesafio />
          <FeatureSectionDesafio />
          <SocialProofDesafio />
          <PricingTableDesafio />
        </main>
        <FooterDesafio />
      </PageDesafio>
    </>
  );
}
