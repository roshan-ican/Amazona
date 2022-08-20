import "../styles/globals.css"
import React, { useEffect } from "react"
import { StoreProvider } from "../utilis/Store"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side")
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  )
}

export default MyApp
