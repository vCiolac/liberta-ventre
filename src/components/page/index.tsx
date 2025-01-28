import Head from 'next/head';
import { tw } from 'twind';
import { css } from 'twind/css';

interface IProps {
  children: React.ReactNode;
}

const pageStyle = css`
  background-color: #fff4f4;
`;

const Page = ({ children }: IProps) => (
  <div className={tw(`relative min-h-screen max-w-full overflow-hidden`)}>
    <div className={tw(pageStyle)}>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={tw(`relative z-10 flex flex-col`)}>{children}</div>
    </div>
  </div>
);

export default Page;
