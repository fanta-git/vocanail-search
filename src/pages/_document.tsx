import { SITE_NAME } from '@/consts/page'
import { Head, Html, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="ja" title={SITE_NAME}>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ width: "100vw" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
