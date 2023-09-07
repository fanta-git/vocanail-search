import { SITE_NAME } from '@/consts/page'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" title={SITE_NAME}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
