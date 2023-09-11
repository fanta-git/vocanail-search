import { SITE_NAME } from '@/consts/page'
import { url } from '@/utils/config'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" title={SITE_NAME}>
      <Head>
        <link rel="icon" href={url`/favicon.ico`} />
      </Head>
      <body style={{ width: "100vw" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
