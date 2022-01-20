import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>© Waz ap</footer>
    </>
  )
}

export default MyApp
