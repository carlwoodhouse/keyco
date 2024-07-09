import { Html, Head, Main, NextScript } from 'next/document'
import HeaderBanner from '../components/header/headerBanner';
import FooterNav from '../components/footer/footerNav';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <div className="container-fluid p-0">
          <HeaderBanner />
          <div className="container-fluid">
            <Main />
            <FooterNav />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}