import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"


function MyApp({ Component, pageProps }: AppProps) {

  return [<Head key={1}>
    <title>Little Park</title>
  </Head>, <Component key={2} {...pageProps} />, <script key={3} defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "2b7391fd755e4282a739d4f1226db49f"}'></script>]
}

export default MyApp
