import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import Header from '../components/Header'

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (process.browser) {
  // @ts-ignore
  window._frameTimestamp = null
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
